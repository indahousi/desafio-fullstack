import * as c from '@chakra-ui/react'
import { useLoaderData } from 'react-router-dom'

import { PropertiesShowLoaderInterface } from '~/interfaces/property/property.interface'

export default function Details() {
  return (
    <c.Box bg="black.0" w="full" h="fit-content" pb="4" rounded="8px">
      <Photo />
      <NameAndLocation />
      <Infos />
      <AboutBuilding />
    </c.Box>
  )
}

function Photo() {
  const { property } = useLoaderData() as PropertiesShowLoaderInterface
  return (
    <c.Image
      src={`${import.meta.env.VITE_APP_CDN_IMAGE}/${property.mainPhoto}`}
      objectFit="cover"
      w="full"
      maxH="300px"
      rounded="8px"
    />
  )
}

function NameAndLocation() {
  const { property } = useLoaderData() as PropertiesShowLoaderInterface
  return (
    <c.Box mt="24px" px="24px">
      <c.Heading fontWeight={700} color="black.500" fontSize="20px">
        {property.name}
      </c.Heading>
      <c.Text mt="4px" fontSize={14} fontWeight={500} color="black.400">
        {`${property?.address?.neighborhood} - ${property.address.city}`}
      </c.Text>
    </c.Box>
  )
}

interface InfoProps {
  value: string
}

function Info({ value }: InfoProps) {
  return (
    <c.Flex px="12px" py="12px" align="center" bg="black.50">
      <c.Text fontSize="16px" fontWeight={500} color="black.500">
        {value}
      </c.Text>
    </c.Flex>
  )
}
function Infos() {
  const { property } = useLoaderData() as PropertiesShowLoaderInterface

  const withPetLabel = property.petFriendly ? 'Aceita pet' : 'Não aceita pet'

  return (
    <c.Grid
      mt={6}
      pb={5}
      gap={1}
      px="24px"
      templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
    >
      <Info value={`${property.guests} pessoas`} />
      <Info value={`${property.bedrooms} quartos`} />
      <Info value={`${property.bathrooms} banheiros`} />
      <Info value={`${property.parkingSpaces} vagas`} />
      <Info value={`${property.area}m²`} />
      <Info value={withPetLabel} />
    </c.Grid>
  )
}

function AboutBuilding() {
  const { property } = useLoaderData() as PropertiesShowLoaderInterface

  return (
    <c.Box mt="40px" px="24px">
      <c.Heading as="h3" fontWeight={700} color="black.500" fontSize="20px">
        Sobre essa Housi
      </c.Heading>
      <c.Text mt="4px" fontSize={14} fontWeight={500} color="black.400">
        {property.building.description}
      </c.Text>
    </c.Box>
  )
}
