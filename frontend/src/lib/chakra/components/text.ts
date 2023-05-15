import {
  ComponentSingleStyleConfig,
  SystemProps,
  SystemStyleObjectRecord,
} from '@chakra-ui/react'

const baseStyle: SystemProps = {
  fontFamily: 'heading',
  fontWeight: 'medium',
  color: 'black.500',
}

const sizes: SystemStyleObjectRecord = {
  xl: {
    fontSize: ['t-xl.0', null, 't-xl.1'],
    lineHeight: 'base',
  },
  lg: {
    fontSize: ['t-lg.0', null, 't-lg.1'],

    lineHeight: 'base',
  },
  md: {
    fontSize: ['t-md.0', null, 't-md.1'],

    lineHeight: 'base',
  },
  sm: {
    fontSize: ['t-sm.0', null, 't-sm.1'],

    lineHeight: 'base',
  },
  xs: {
    fontSize: ['t-xs.0', null, 't-xs.1'],
    lineHeight: 'base',
  },
}

export const Text: ComponentSingleStyleConfig = {
  baseStyle,
  sizes,
}
