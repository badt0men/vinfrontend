/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Button,
  Center,
  Flex,
  Portal,
  SimpleGrid,
  useBoolean,
  useFocusOnShow,
  VStack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { HTMLMotionProps, motion, Variants } from 'framer-motion'
import * as React from 'react'
import FocusLock from 'react-focus-lock'
import {
  HiOutlineX,
  HiMenuAlt3,
} from 'react-icons/hi'
import { RiHome5Fill } from 'react-icons/ri'
import {GiMultiDirections} from 'react-icons/gi'
import {BsPatchQuestionFill} from 'react-icons/bs'
import {FaBlog} from 'react-icons/fa'
import {MdContacts} from 'react-icons/md'
import { RemoveScroll } from 'react-remove-scroll'
import { NavLink } from './NavLink'
import { AppButton } from '../../Buttons/AppButton'

const LogoLight = <img src="/image/logo/ongadLogo.svg" width="70" alt="logo" />
const LogoDark =  <img src="/image/logo/ongadLogoALt.svg" width="70" alt="logo-alt" />

const variants: Variants = {
  show: {
    display: 'revert',
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  hide: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.1, ease: 'easeIn' },
    transitionEnd: { display: 'none' },
  },
}

const Backdrop = ({ show }: { show?: boolean }) => (
  <Portal>
    <motion.div
      initial={false}
      animate={show ? 'show' : 'hide'}
      transition={{ duration: 0.1 }}
      variants={{
        show: { opacity: 1, display: 'revert' },
        hide: { opacity: 0, transitionEnd: { display: 'none' } },
      }}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        background: 'rgba(0,0,0,0.2)',
        inset: 0,
      }}
    />
  </Portal>
)

const Transition = (props: HTMLMotionProps<'div'> & { in?: boolean }) => {
  const { in: inProp, ...rest } = props
  return (
    <motion.div
      {...rest}
      initial={false}
      variants={variants}
      animate={inProp ? 'show' : 'hide'}
      style={{
        transformOrigin: 'top right',
        position: 'absolute',
        width: 'calc(100% - 32px)',
        top: '24px',
        left: '16px',
        margin: '0 auto',
        zIndex: 1,
      }}
    />
  )
}

export const MobileNav = () => {
  const [show, { toggle, off }] = useBoolean()
  const ref = React.useRef<HTMLDivElement>(null)
  useFocusOnShow(ref, { visible: show, shouldFocus: true })

  return (
    <>
      <Box
        as="button"
        type="button"
        p="1"
        fontSize="2xl"
        color={mode('deepBlue', 'skyBlue')}
        onClick={toggle}
        display={{ base: 'block', lg: 'none' }}
      >
        <HiMenuAlt3 />
      </Box>

      <Transition in={show}>
        <RemoveScroll enabled={show}>
          <Backdrop show={show} />
        </RemoveScroll>
        <FocusLock disabled={!show} returnFocus>
          <Box
            bg={mode('white', 'deepBlue.500')}
            shadow="lg"
            rounded="lg"
            ref={ref}
            tabIndex={0}
            outline={0}
          >
            <Box pt="5" pb="6" px="5">
              <Flex justify="space-between" align="center">
              {mode('light', 'dark') === 'light' ? LogoLight : LogoDark}
                <Box mr="-2" mt="-2">
                  <Center
                    as="button"
                    type="button"
                    onClick={off}
                    rounded="base"
                    p="1"
                    color={mode('gray.600', 'gray.400')}
                    _hover={{ bg: mode('gray.100', 'gray.600') }}
                  >
                    <Box srOnly>Close menu</Box>
                    <HiOutlineX aria-hidden fontSize="1.5rem" />
                  </Center>
                </Box>
              </Flex>
              <SimpleGrid as="nav" gap="8" mt="8" columns={{ base: 1, sm: 2 }} onClick={toggle}>
                <NavLink.Mobile href="/">Home</NavLink.Mobile>
                <NavLink.Mobile href="guide">Guide</NavLink.Mobile>
                <NavLink.Mobile href="faq">FAQ</NavLink.Mobile>
                <NavLink.Mobile href="blog">Blog</NavLink.Mobile>
                <NavLink.Mobile href="contact">Contact</NavLink.Mobile>
                <NavLink.Mobile><span className="emphasisColor">Buy Luxury Cars</span></NavLink.Mobile>
              </SimpleGrid>
              <VStack mt="8" spacing="4">
                {/* <Button w="100%" bgGradient='linear(to-t, red.200, red.100)' rounded="md" color="white" _hover={{bgGradient: 'linear(to-r, red.200, red.100)'}} _focus={{boxShadow: "none"}}>
                  Free VIN Check
                </Button> */}
                <AppButton>
                  Free VIN Check
                </AppButton>
                <Box textAlign="center" fontWeight="medium" fontSize={12}>
                  Still a guest?{' '}
                  <Box as="a" color={mode('red.100', 'red.100')}>
                    SIGN UP
                  </Box>
                </Box>
              </VStack>
            </Box>
          </Box>
        </FocusLock>
      </Transition>
    </>
  )
}
