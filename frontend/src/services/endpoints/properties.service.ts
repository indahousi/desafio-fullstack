import { Pagination } from '~/interfaces/pagination/pagination'
import { PropertyInterface } from '~/interfaces/property/property.interface'

import { get } from '../http/http.service'
import { endpoints } from './endpoints'

export const getProperty = async (id: string) => {
  return await get<PropertyInterface>({
    url: endpoints.PROPERTIES.SHOW(id),
  })
}

export const getProperties = async () => {
  return await get<Pagination<PropertyInterface>>({
    url: endpoints.PROPERTIES.INDEX,
  })
}
