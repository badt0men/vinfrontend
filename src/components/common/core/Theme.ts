import { extendTheme, ThemeConfig, useColorMode, useColorModeValue } from '@chakra-ui/react'

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  skyBlue: '#F4F6FC',
  myGray: '#252E4B',
  red: {
    100: '#ED213A',
    200: '#93291E',
  },
  deepBlue: {
    100: '#252E4B',
    500: '#1A202C',
  }
}

const fonts = {
  body: '"Rubik", sans-serif',
  heading: '"Rubik", sans-serif',
}

const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}


const components = {
    Button: {
        defaultProps: {
            variantColor: 'brand.900',
        },
    },
}

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
  
const theme = extendTheme({ colors, config, components, fonts, fontWeights })
export default theme;
