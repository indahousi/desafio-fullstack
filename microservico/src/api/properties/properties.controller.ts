import { Request, Response } from 'express'
import Boom from '@hapi/boom'
import Logger from '../../commons/helpers/logger'
import { IndexService, ShowService } from './services/index'

const notFoundError = Boom.notFound().output.payload
const serverError = Boom.internal().output.payload

class CleaningsController {
  public static async index(req: Request, res: Response): Promise<Response> {
    try {
      const properties = await IndexService.index()

      return res.status(200).json(properties)
    } catch (e) {
      Logger.error('Unable to list all properties. Error:', e)
      return res.status(500).json(serverError)
    }
  }

  public static async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const property = await ShowService.show(id)
      return res.status(200).json(property)
    } catch (e) {
      Logger.error('Property doesnt exist. Error:', e)
      return res.status(404).json(notFoundError)
    }
  }
}

export default CleaningsController
