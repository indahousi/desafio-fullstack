import { z } from 'zod'
import { Types } from 'mongoose'

const validMongoId = z
  .string()
  .min(1)
  .refine((value) => {
    try {
      return new Types.ObjectId(value)
    } catch (error) {
      return false
    }
  }, 'Invalid ObjectId')

export default validMongoId
