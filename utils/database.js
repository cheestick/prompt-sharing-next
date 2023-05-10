import mongoose from 'mongoose'

let isConnected = false // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('MongoDB is alredy connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'prompt_sharing',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    isConnected = true
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error.message)
    // isConnected = false
  }
}
