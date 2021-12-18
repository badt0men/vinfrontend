// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

//Foundational style overrides
import {colors, fonts, fontWeights, letterSpacings} from './foundations/index'

// Component style overrides
import {button} from './components/index'


const myOverrides = {
  styles,
  colors,
  fonts,
  fontWeights,
  letterSpacings,
  // Other foundational style overrides go here
  
  components: {
    button,
    // Other components go here
  },
}


const theme = extendTheme(myOverrides)
export default theme;