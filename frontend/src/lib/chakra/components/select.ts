import { ComponentStyleConfig } from '@chakra-ui/react'

export const Select: ComponentStyleConfig = {
  parts: ['field', 'addon'],
  baseStyle: {},
  sizes: {},
  variants: {
    primary: {
      field: {
        color: 'black.500',
        fontWeight: 'medium',
        fontSize: ['t-md.0', 't-md.1'],
        backgroundColor: 'black.100',
        border: '1px solid',
        borderColor: 'black.200',
        _hover: {
          borderColor: 'black.200',
        },
        _focus: {
          backgroundColor: 'primary.50',
          borderColor: 'primary.400',
        },
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}
