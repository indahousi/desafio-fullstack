import { z } from 'zod'
import validMongoId from '../../../commons/database/validations/objectId.validation'

export const idRule = z.object({
  params: z.object({
    id: validMongoId,
  }),
})
