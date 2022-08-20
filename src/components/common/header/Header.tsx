/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Text,
  Flex,
  HStack,
  useColorModeValue as mode,
  useColorMode,
} from '@chakra-ui/react'
import React from 'react'
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'
import {FaUserPlus, FaTelegramPlane} from 'react-icons/fa'
import {IoInvertMode} from 'react-icons/io5'
import Link from 'next/link'
import { AppButton } from '../../Buttons/AppButton'

const LogoLight = <img src="/image/logo/ongadLogo.svg" width="70" alt="logo" />
const LogoDark =  <img src="/image/logo/ongadLogoALt.svg" width="70" alt="logo-alt" />


const Header = () => {  

  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Box w="100%" mx="auto" py={{base: '4', md: '3'}} px={{ base: '6', md: '14' }} bg={mode('white', 'deepBlue.500')} h={{base: '50', md: '10'}}>
         <Flex justify="end" fontWeight="regular" fontSize="11">
         <HStack spacing="8">
                {/* <Link href="/">Sample Requests</Link> */}
                <Link href="/business" passHref>Business</Link>
                <Link href="/careers" passHref>Careers</Link>
                <Link href="/media" passHref>Media</Link>
            <Box borderWidth="1px" borderColor={mode("teal.500", "teal.400")} color={mode("teal.50", "white")} fontWeight="medium" bg={mode("teal.500", "teal.400")} px="4" py="0.5" rounded="md">
                  <Link href="/">Login</Link>
                </Box>
          </HStack>
          <Box as="button" ml="6" fontSize="16" p="1" rounded="md" bg={mode('gray.100', 'gray.500')} onClick={toggleColorMode}>
            {/* Color switch icon */}
            <IoInvertMode color={colorMode === 'light' ? 'Dark' : 'Light'} />
          </Box>
         </Flex>
      </Box>
      <Box id="header" as="header" bg={mode('skyBlue', 'deepBlue.100')}>
        <Box w="100%" mx="auto" py="4" px={{ base: '6', md: '8' }}>
          <Flex as="nav" justify="space-between">
            <HStack spacing="32">
              <Link href="/">
                {mode('light', 'dark') === 'light' ? LogoLight : LogoDark}
              </Link>
              <HStack display={{ base: 'none', lg: 'flex' }} spacing="10" fontWeight="medium" textTransform="uppercase" fontSize="13px" color={mode('gray.600', 'gray.300')}>
                <NavLink.Desktop active href="/">Home</NavLink.Desktop>
                <NavLink.Desktop href="/guide">Guide</NavLink.Desktop>
                <NavLink.Desktop href="/faq">FAQ</NavLink.Desktop>
                <NavLink.Desktop href="/blog">Blog</NavLink.Desktop>
                <NavLink.Desktop href="/contact">Contact</NavLink.Desktop>
                <NavLink.Desktop href="/#"><span className="emphasisColor">Buy Luxury Cars</span></NavLink.Desktop>
              </HStack>
            </HStack>
            <Flex align="center">
              <HStack spacing="8" display={{ base: 'none', md: 'flex' }}>
                <AppButton>
                  <FaUserPlus color="deepBlue.100" />
                  <Text mx="2"> Sign Up </Text>
                </AppButton>
                <AppButton red>
                <FaTelegramPlane />
                    <Text mx="2"> Free VIN Check</Text>
                </AppButton>
              </HStack>
              <Box ml="5">
                <MobileNav />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}


export default Header;
