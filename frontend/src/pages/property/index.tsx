import * as c from '@chakra-ui/react'

import Booking from './booking'
import Details from './details'

export default function PropertyPage() {
  return (
    <c.Container
      py="24px"
      display="flex"
      gap="48px"
      justifyContent="space-between"
    >
      <Details />
      <Booking />
    </c.Container>
  )
}
