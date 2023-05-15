import * as c from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { HousiLogoIcon } from '~/assets/icons/housi-logo.icon'

export default function Navbar() {
  return (
    <c.Flex w="100%" minH="68px" maxH="68px" bg="black.0" mb="m3">
      <c.Flex
        w="100%"
        maxW="1280px"
        align="center"
        justify="space-around"
        mx="auto"
        px="s5"
      >
        <c.Link as={Link} to="/">
          <HousiLogoIcon />
        </c.Link>
      </c.Flex>
    </c.Flex>
  )
}
