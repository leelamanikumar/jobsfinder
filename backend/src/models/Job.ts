import mongoose, { Schema, Document, Model } from 'mongoose';

export interface JobDocument extends Document {
  title: string;
  company: string;
  location: string;
  description?: string;
  salaryMin?: number;
  salaryMax?: number;
  jobType?: string;
  applicationDeadline?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema: Schema<JobDocument> = new Schema(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    description: { type: String },
    salaryMin: { type: Number },
    salaryMax: { type: Number },
    jobType: { type: String },
    applicationDeadline: { type: Date },
  },
  { timestamps: true }
);

const Job: Model<JobDocument> =
  mongoose.models.Job || mongoose.model<JobDocument>('Job', JobSchema);

export default Job;


