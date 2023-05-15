import { Document, model, PaginateModel, Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

export enum CategoryEnum {
  STANDARD = 'STANDARD',
  PRIME = 'PRIME',
  DUPLEX = 'DUPLEX',
}

export interface AddressInterface extends Document {
  country: string
  state: string
  city: string
  neighborhood: string
  street: string
  streetNumber: string
  zipCode: string
}

export interface BuildingInterface extends Document {
  name: string
  description: string
  active: boolean
}

export interface PropertyInterface extends Document {
  name: string
  description: string
  area: number
  guests: number
  bedrooms: number
  beds: number
  bathrooms: number
  parkingSpaces: number
  roomNumber?: string
  category: CategoryEnum
  petFriendly: boolean
  address: AddressInterface
  mainPhoto: string
  gallery: string[]
  active: boolean
  building: BuildingInterface
}

const addressSchema = new Schema({
  country: String,
  state: String,
  city: String,
  neighborhood: String,
  street: String,
  streetNumber: String,
  zipCode: String,
  coordinates: [Number],
})

const buildingSchema = new Schema({
  name: String,
  description: String,
  active: Boolean,
})

const propertySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: addressSchema,
    area: Number,
    guests: Number,
    bedrooms: Number,
    beds: Number,
    bathrooms: Number,
    parkingSpaces: Number,
    roomNumber: String,
    mainPhoto: String,
    category: {
      type: String,
      enum: Object.values(CategoryEnum),
      default: CategoryEnum.STANDARD,
    },
    petFriendly: { type: Boolean, default: false },
    gallery: [{ type: String }],
    building: buildingSchema,
    active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

propertySchema.plugin(mongoosePaginate)

type PaginateProperty = PaginateModel<PropertyInterface>
export const Properties = model<PropertyInterface>(
  'Property',
  propertySchema,
) as PaginateProperty
