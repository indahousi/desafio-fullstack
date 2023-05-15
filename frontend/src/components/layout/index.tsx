import * as c from '@chakra-ui/react'

import Navbar from './navbar'

export default function DefaultLayout({ render }: { render: JSX.Element }) {
  return (
    <>
      <Navbar />
      <c.Flex justify="center">{render}</c.Flex>
    </>
  )
}
