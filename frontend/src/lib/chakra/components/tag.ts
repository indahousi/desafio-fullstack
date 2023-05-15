import { ComponentStyleConfig } from '@chakra-ui/react'

export const Tag: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: {
      container: {
        fontSize: '12px',
        fontWeight: 'bold',
        px: 's3',
        py: 's1',
        minH: '26px',
        borderRadius: '24px',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}
