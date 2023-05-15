import {
  ComponentStyleConfig,
  SystemStyleObjectRecord,
  ThemeComponents,
} from '@chakra-ui/react'

type RadioType = ThemeComponents['Radio']

const baseStyle: RadioType['baseStyle'] = {
  container: {
    w: '100%',
    py: 's3',
    px: 'm2',
    mb: 's2',
    border: '1px',
    borderRadius: '8px',
    borderColor: 'black.200',
    _checked: {
      backgroundColor: 'primary.50',
      borderColor: 'primary.400',
    },
  },
  label: {
    color: 'black.500',
    fontWeight: 'medium',
    display: 'flex',
    align: 'center',
    gap: 's4',
  },
  control: {
    borderColor: 'black.300',
    _checked: {
      backgroundColor: 'primary.50',
      borderColor: 'primary.400',
      _before: {
        backgroundColor: 'primary.400',
      },
    },
  },
}

const defaultProps: RadioType['defaultProps'] = {
  size: 'sm',
}

const sizes: SystemStyleObjectRecord = {
  sm: {
    label: {
      fontSize: ['t-md.1', 't-md.1'],
    },
  },
}

export const Radio: ComponentStyleConfig = {
  baseStyle,
  defaultProps,
  sizes,
}
