import { ComponentMultiStyleConfig, SystemProps } from '@chakra-ui/react'

const baseStyle: Record<string, SystemProps> = {
  overlay: {
    backdropFilter: 'blur(5px)',
  },
  closeButton: {
    top: '34px',
    right: '15px',
  },
  header: { p: 0 },
  body: { pt: 'l2', pb: 0, px: 's5' },
  footer: { pt: 0, pb: 'l2', px: 's5', display: 'flex', gap: 's4' },
}

export const Modal: ComponentMultiStyleConfig = {
  parts: ['overlay', 'dialogContainer', 'closeButton'],
  baseStyle,
}
