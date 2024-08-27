import mongoose from 'mongoose'

const url = process.env.MONGOOS_URL

const connectDB = async () => {
  if (mongoose.connection.readyState) {
    console.log('MongoDB already connected')
    return true
  }
  try {
    await mongoose.connect(url!)
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

export default connectDB
