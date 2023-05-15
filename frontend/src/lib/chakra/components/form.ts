import { ComponentMultiStyleConfig } from '@chakra-ui/react'

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
}

export const Form: ComponentMultiStyleConfig = {
  parts: ['container', 'label', 'input'],
  baseStyle: {},
  sizes: {},
  variants: {
    floating: {
      container: {
        _focusWithin: {
          label: {
            ...activeLabelStyles,
          },
        },
        'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
          {
            ...activeLabelStyles,
          },
        label: {
          top: 0,
          left: 0,
          zIndex: 2,
          position: 'absolute',
          color: 'black.400',
          fontSize: ['t-md.0', 't-md.1'],
          fontWeight: 'medium',
          backgroundColor: 'black.0',
          pointerEvents: 'none',
          mx: 3,
          px: 1,
          my: 2,
          transformOrigin: 'left top',
        },
        input: {
          borderColor: 'black.200',
          _focus: {
            boxShadow: 'none',
            borderColor: 'black.200',
          },
          _hover: {
            borderColor: 'black.200',
          },
        },
      },
    },
  },
  defaultProps: {
    variant: 'floating',
  },
}
