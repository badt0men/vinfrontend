
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

const overrides = {
    styles: {
      global: (props: Dict<any>) => ({
        body: {
          color: mode('red.800', 'whiteAlpha.900')(props),
          background: mode('white', 'gray.800')(props),
          lineHeight: 'base',
          focusBorderColor: 'red.100',
          _focusWithin: {
            boxShadow: 'none',
            outline: 'none',
          },
          _focus: {
            boxShadow: 'none',
            outline: 'none',
          },
          _active: {
            outline: 'none',
          }
        },
        
      }),
    },
  }

  export default overrides;