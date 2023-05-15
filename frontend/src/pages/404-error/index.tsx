import * as c from '@chakra-ui/react'

export default function Error404() {
  return (
    <c.Flex
      align="center"
      justify="center"
      gap="l5"
      direction={['column', 'row']}
      wrap="wrap"
    >
      <c.Box px="l1">
        <c.Heading color="black.400" mb="s4">
          OOPS..
        </c.Heading>
        <c.Text color="black.400" size="xl" mb="s6" maxW="226px">
          A página que você está procurando não existe.
        </c.Text>
        <c.Button as={c.Link} href="https://housi.com/" borderRadius="60px">
          Voltar a página inicial
        </c.Button>
      </c.Box>

      <c.Image
        src={`${import.meta.env.VITE_APP_CDN_IMAGE}/site/common/error-404.png`}
        h={['346px', '446px']}
        w={['495px', '595px']}
      />
    </c.Flex>
  )
}
