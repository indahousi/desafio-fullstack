import { extendTheme } from '@chakra-ui/react'

import { Button } from './components/button'
import { Container } from './components/container'
import { Drawer } from './components/drawer'
import { Form } from './components/form'
import { Heading } from './components/heading'
import { Link } from './components/link'
import { Menu } from './components/menu'
import { Modal } from './components/modal'
import { Radio } from './components/radio'
import { Select } from './components/select'
import { Tag } from './components/tag'
import { Text } from './components/text'
import { foundations } from './foundations'

const theme = extendTheme({
  ...foundations,
  components: {
    Button,
    Container,
    Heading,
    Text,
    Modal,
    Drawer,
    Radio,
    Form,
    Tag,
    Select,
    Link,
    Menu,
  },
  styles: {
    global: {
      body: {
        background: 'black.100',
      },
      '.gm-ui-hover-effect': {
        display: 'none',
        visibility: 'hidden',
      },
      '.scrollbar-hidden': {
        '::-webkit-scrollbar': {
          maxWidth: '5px',
          minWidth: '5px',
        },
        '::-webkit-scrollbar-track': {
          background: '#e2e2e2',
          borderRadius: '8px',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#c4c4c4',
          borderRadius: '8px',
        },
      },
    },
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  layers: {
    base: 10,
    header: 15,
    menu: 25,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  config: {
    cssVarPrefix: 'housi',
  },
})

export default theme
