import { Schema, model, models } from 'mongoose'

const jopTrackerSchema = new Schema(
  {
    postion: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    jobStatus: {
      type: String,
      require: true,
      trim: true,
      enum: {
        values: ['pending', 'interview', 'declined'],
        message: 'job status is required',
      },
    },
    jobMode: {
      type: String,
      require: true,
      trim: true,
      enum: {
        values: ['full-time', 'part-time'],
        message: 'job mode is required',
      },
    },
    userId: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

const JobTracker =
  models['Job-Tracker'] || model('Job-Tracker', jopTrackerSchema)

export default JobTracker
