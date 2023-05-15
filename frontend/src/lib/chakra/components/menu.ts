import { ComponentStyleConfig } from '@chakra-ui/react'

export const Menu: ComponentStyleConfig = {
  baseStyle: {},
  variants: {
    navbar: {
      button: {
        //fontSize: 't-md',
        color: 'black.500',
        fontWeight: 'bold',
        py: 's2',
        px: 's3',
        borderRadius: '8px',
        _hover: {
          backgroundColor: 'primary.50',
        },
        span: {
          display: 'flex',
          alignItems: 'center',
          gap: 's2',
        },
      },
      list: {
        py: 's2',
        border: '1px',
        borderRadius: '12px',
        borderColor: '#E2E8F0',
      },
      item: {},
    },
  },
  defaultProps: {},
}
