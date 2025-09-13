import express, { Application, Request, Response, NextFunction } from 'express';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import { connectToDatabase } from './lib/db';
import jobRoutes from './routes/jobRoutes';

dotenv.config();

const app: Application = express();

// --- Security & Parsing Middlewares ---
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- CORS SETUP ---
const isDev = process.env.NODE_ENV !== 'production';
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map(s => s.trim())
  : ['https://jobfinder-frontend-6elp.onrender.com']; // fallback domain for production

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow server-to-server, Postman, etc.
    if (isDev || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // ✅ allow preflight
  allowedHeaders: ['Content-Type', 'Authorization'], // ✅ allow custom headers
};

app.use(cors(corsOptions));
// Explicitly handle preflight requests for all routes
app.options('*', cors(corsOptions));

// --- Logging (Dev only) ---
if (isDev) {
  app.use(morgan('dev'));
}

// --- Health Route ---
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// --- Main Routes ---
app.use('/api/jobs', jobRoutes);

// --- Global Error Handler ---
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  const message = err instanceof Error ? err.message : 'Internal Server Error';
  res.status(500).json({ error: message });
});

// --- Start Server ---
const port = Number(process.env.PORT || 5000);

async function start() {
  await connectToDatabase();
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

start().catch((error) => {
  console.error('Failed to start server', error);
  process.exit(1);
});

export default app;


