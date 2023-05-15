import { ComponentSingleStyleConfig, ThemeComponents } from '@chakra-ui/react'

type ContainerType = ThemeComponents['Container']

const baseStyle: ContainerType['baseStyle'] = {
  maxW: ['calc(100% - 24px)', 'container.lg', null, 'container.xl'],
  px: [0, 3, 5],
  mx: 'auto',
}

export const Container: ComponentSingleStyleConfig = {
  baseStyle,
}
