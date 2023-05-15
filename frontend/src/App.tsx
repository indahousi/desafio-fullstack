import { ChakraProvider } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'

import theme from './lib/chakra/theme'
import { Main } from './routes'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HelmetProvider>
        <div className="App">
          <Main />
        </div>
      </HelmetProvider>
    </ChakraProvider>
  )
}

export default App
