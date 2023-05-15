import {
  ComponentSingleStyleConfig,
  SystemProps,
  SystemStyleObjectRecord,
} from '@chakra-ui/react'

const baseStyle: SystemProps = {
  fontFamily: 'heading',
  fontWeight: 'semiBold',
  color: 'black.500',
}

const sizes: SystemStyleObjectRecord = {
  xl: {
    fontSize: ['h-xl.0', null, 'h-xl.1'],
    lineHeight: 'base',
  },
  lg: {
    fontSize: ['h-lg.0', null, 'h-lg.1'],

    lineHeight: 'base',
  },
  md: {
    fontSize: ['h-md.0', null, 'h-md.1'],

    lineHeight: 'base',
  },
  sm: {
    fontSize: ['h-sm.0', null, 'h-sm.1'],

    lineHeight: 'base',
  },
  xs: {
    fontSize: ['h-xs.0', null, 'h-xs.1'],
    lineHeight: 'base',
  },
}

export const Heading: ComponentSingleStyleConfig = {
  baseStyle,
  sizes,
}
