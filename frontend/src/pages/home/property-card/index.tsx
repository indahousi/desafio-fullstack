import * as c from '@chakra-ui/react'

import { PriceInterface } from '~/interfaces/property/property.interface'

import Price from './price'

interface AddressInterface {
  country: string
  state: string
  city: string
  neighborhood: string
  street: string
  streetNumber: string
  zipCode: string
}

interface Props {
  _id: string
  name: string
  mainPhoto: string
  address: AddressInterface
  price: PriceInterface
}

const PropertyCard = (props: Props) => {
  return (
    <c.Flex direction="column" cursor="pointer">
      <c.Box w="100%">
        <c.Image
          w="full"
          maxH="200px"
          rounded="8px"
          objectFit="cover"
          src={`${import.meta.env.VITE_APP_CDN_IMAGE}/${props.mainPhoto}`}
          alt={props.name}
        />
      </c.Box>
      <c.Flex direction="column" gap="16px" padding="16px" w="full">
        <c.Flex w="full" direction="column" cursor="pointer">
          <c.Text fontWeight="bold" noOfLines={1}>
            {props.name}
          </c.Text>
          <c.Text fontSize="12px" color="black.400">
            {`${props.address.neighborhood}, ${props.address.state}`}
          </c.Text>
        </c.Flex>
        <c.Flex
          alignItems={['start', null, 'center']}
          justifyContent="space-between"
          direction={['column', null, 'row']}
          w="full"
          gap={['15px', null, 'none']}
        >
          <Price {...props.price} />
        </c.Flex>
      </c.Flex>
    </c.Flex>
  )
}

export default PropertyCard
