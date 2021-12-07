import type { AppProps } from 'next/app'
import '../src/styles/globals.css'
import { ChakraProvider} from '@chakra-ui/react'
import theme from '../src/components/common/core/theme/index'



function VinCheckApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default VinCheckApp