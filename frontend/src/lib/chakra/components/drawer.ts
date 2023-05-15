import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Drawer: ComponentMultiStyleConfig = {
  parts: ['dialogContainer', 'dialog'],
  variants: {
    menu: {
      dialogContainer: {
        zIndex: 99,
      },
    },
    preview: {
      dialogContainer: {
        zIndex: 9999,
      },
    },
  },
}
