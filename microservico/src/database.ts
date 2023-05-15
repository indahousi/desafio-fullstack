import mongoose from 'mongoose'
import Logger from './commons/helpers/logger'

async function connectDB() {
  const uri = String(process.env.MONGO_URI)
  mongoose.set('debug', process?.env?.MONGO_DEBUG === 'true')
  mongoose.set('strictQuery', false)
  try {
    await mongoose.connect(uri)
    Logger.info('Mongodb connected successfully.')
  } catch (error) {
    Logger.error('unable to connect to DB. Error: ', error)
    throw error
  }
}

connectDB()
