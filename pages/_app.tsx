import type { AppProps } from 'next/app'
import '../src/styles/globals.css'
import { ChakraProvider} from '@chakra-ui/react'
import theme from '../src/components/common/theme/index'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Layout from '../src/components/layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../state/store'; 
import "../src/styles/globals.css"


function VinCheckApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ChakraProvider>
    </Provider>
  )
}

export default VinCheckApp