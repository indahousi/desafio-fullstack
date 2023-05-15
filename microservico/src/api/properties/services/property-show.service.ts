import {
  Properties,
  PropertyInterface,
} from '../../../commons/database/models/properties'
import Logger from '../../../commons/helpers/logger'

export class ShowService {
  public static async show(propertyId: string): Promise<PropertyInterface | null> {
    try {
      return await Properties.findById(propertyId)
    } catch (error) {
      Logger.error('unable to find cleaning service', error)
      throw error
    }
  }
}
