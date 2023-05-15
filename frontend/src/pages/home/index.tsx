import * as c from '@chakra-ui/react'
import { useLoaderData } from 'react-router-dom'

import { PropertiesIndexLoaderInterface } from '~/interfaces/property/property.interface'

import PropertyCard from './property-card'

export default function HomePage() {
  const { properties } = useLoaderData() as PropertiesIndexLoaderInterface

  return (
    <c.Container>
      <c.Box w="full" mb="m3">
        <c.Box w="full" bg="black.0" py="m3" px="l1" borderTopRadius="12px">
          <c.Heading size="md" textAlign="center">
            Listagem de propriedades
          </c.Heading>
        </c.Box>

        <c.Grid
          py="l2"
          px="l1"
          bg="black.0"
          borderBottomRadius="12px"
          gap="m3"
          templateColumns="repeat(3, 1fr)"
        >
          {properties.items.map((property: any) => (
            <PropertyCard
              key={property._id}
              _id={property._id}
              price={property.price}
              name={property.name}
              address={property.address}
              mainPhoto={property.mainPhoto}
            />
          ))}
        </c.Grid>
      </c.Box>
    </c.Container>
  )
}
