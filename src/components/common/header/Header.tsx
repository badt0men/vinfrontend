import {
  Box,
  Text,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  useColorMode,
} from '@chakra-ui/react'
import * as React from 'react'
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'
import {FaUserPlus, FaTelegramPlane} from 'react-icons/fa'
import {IoInvertMode} from 'react-icons/io5'
import Link from 'next/link'

const LogoLight = <img src="../image/logo/ongadLogo.svg" width="70" alt="logo" />
const LogoDark =  <img src="../image/logo/ongadLogoALt.svg" width="70" alt="logo-alt" />


export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box minH="480px">
      <Box Box maxW="7xl" mx="auto" py={{base: '4', md: '3'}} px={{ base: '6', md: '14' }} bg={mode('white', 'deepBlue.500')} h={{base: '50', md: '10'}}>
         <Flex justify="end" fontWeight="medium" fontSize="12">
         <HStack spacing="8">
                {/* <Link href="/">Sample Requests</Link> */}
                <Link href="/">Business</Link>
                <Link href="/">Careers</Link>
                <Link href="/">Media</Link>
                <Box borderWidth="1px" borderColor={mode('deepBlue.100','skyBlue')} px="4" py="0.5" rounded="sm">
                  <Link href="/">Login</Link>
                </Box>
          
          </HStack>
          <Box as="button" ml="6" fontSize="16" p="1" rounded="md" bg={mode('gray.100', 'gray.500')} onClick={toggleColorMode}>
            <IoInvertMode color={colorMode === 'light' ? 'Dark' : 'Light'} />
          </Box>
         </Flex>
      </Box>
      <Box as="header" bg={mode('skyBlue', 'deepBlue.100')}>
        <Box maxW="7xl" mx="auto" py="4" px={{ base: '6', md: '8' }}>
          <Flex as="nav" justify="space-between">
            <HStack spacing="32">
              {mode('light', 'dark') === 'light' ? LogoLight : LogoDark}
              <HStack display={{ base: 'none', lg: 'flex' }} spacing="10">
                <NavLink.Desktop active>Home</NavLink.Desktop>
                <NavLink.Desktop>Guide</NavLink.Desktop>
                <NavLink.Desktop>FAQ</NavLink.Desktop>
                <NavLink.Desktop>Blog</NavLink.Desktop>
                <NavLink.Desktop>Contact</NavLink.Desktop>
              </HStack>
            </HStack>
            <Flex align="center">
              <HStack spacing="8" display={{ base: 'none', md: 'flex' }}>

                <Button variant="outline" rounded="md" w="40" fontSize="15" fontWeight="medium" borderWidth="2px" borderColor={mode("deepBlue.100", "gray.400")}>
                    <FaUserPlus color="deepBlue.100" />
                    <Text mx="2"> SIGN UP </Text>
                </Button>
                <Button bgGradient='linear(to-t, red.200, red.100)' rounded="md" color="white" _hover={{bgGradient: 'linear(to-r, red.200, red.100)'}}>
                <FaTelegramPlane />
                    <Text mx="2"> Free VIN Check</Text>
                </Button>
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
