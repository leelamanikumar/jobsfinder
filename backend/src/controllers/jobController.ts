import { Request, Response } from 'express';
import Job from '../models/Job';

export async function createJob(req: Request, res: Response) {
  try {
    // Basic normalization/sanitization
    const payload = {
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      description: req.body.description,
      salaryMin: req.body.salaryMin !== undefined ? Number(req.body.salaryMin) : undefined,
      salaryMax: req.body.salaryMax !== undefined ? Number(req.body.salaryMax) : undefined,
      jobType: req.body.jobType,
      applicationDeadline: req.body.applicationDeadline ? new Date(req.body.applicationDeadline) : undefined,
    };

    const job = await Job.create(payload);
    return res.status(201).json(job);
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Create job failed:', err?.message || err);
    if (err?.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: 'Failed to create job' });
  }
}

export async function getJobs(_req: Request, res: Response) {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    return res.json(jobs);
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Get jobs failed:', err?.message || err);
    return res.status(500).json({ error: 'Failed to fetch jobs' });
  }
}

export async function getJobById(req: Request, res: Response) {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    return res.json(job);
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Get job failed:', err?.message || err);
    return res.status(500).json({ error: 'Failed to fetch job' });
  }
}

export async function updateJob(req: Request, res: Response) {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ error: 'Job not found' });
    return res.json(job);
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Update job failed:', err?.message || err);
    return res.status(500).json({ error: 'Failed to update job' });
  }
}

export async function deleteJob(req: Request, res: Response) {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    return res.status(204).send();
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Delete job failed:', err?.message || err);
    return res.status(500).json({ error: 'Failed to delete job' });
  }
}


