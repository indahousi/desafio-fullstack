import { DineroObject } from 'dinero.js'

import { Pagination } from '../pagination/pagination'

interface AddressInterface {
  country: string
  state: string
  city: string
  neighborhood: string
  street: string
  streetNumber: string
  zipCode: string
  coordinates: number[]
}

export interface PriceInterface {
  grossAmount: DineroObject
  netAmount: DineroObject
  feesAmount: DineroObject
  fees: { name: string; amount: DineroObject }[]
}

export interface PropertyInterface {
  _id: string
  name: string
  area: number
  guests: number
  bedrooms: number
  beds: number
  bathrooms: number
  petFriendly: boolean
  mainPhoto: string
  address: AddressInterface
  parkingSpaces?: number
  description: string
  building: {
    _id: string
    description: string
    name: string
  }
  active: boolean
  price: PriceInterface
}

export default PropertyInterface

export interface PropertiesShowLoaderInterface {
  property: PropertyInterface
  price: PriceInterface
}

export interface PropertiesIndexLoaderInterface {
  properties: Pagination<PropertyInterface>
}
