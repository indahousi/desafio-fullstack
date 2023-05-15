import { ComponentStyleConfig } from '@chakra-ui/react'

export const Link: ComponentStyleConfig = {
  baseStyle: {
    _hover: {
      textDecoration: 'none',
    },
  },
  sizes: {},
  variants: {
    primary: {
      color: 'primary.400',
      fontWeight: 'bold',
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}
