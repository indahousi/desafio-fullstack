import { Properties } from '../../../commons/database/models/properties'

export class IndexService {
  public static async index() {
    const where = {}
    const properties = await Properties.find(where)

    return { items: properties }
  }
}
