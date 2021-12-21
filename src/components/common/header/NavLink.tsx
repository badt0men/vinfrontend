import {
  Box,
  Flex,
  HTMLChakraProps,
  Icon,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import Link from 'next/link'

interface DesktopNavLinkProps extends HTMLChakraProps<'a'> {
  active?: boolean
}

const DesktopNavLink = (props: DesktopNavLinkProps) => {
  const { active, href, ...rest }:any = props

  // return (
  //   <Flex as="a"
  //     href={href}
  //     aria-current={active ? 'page' : undefined}
  //     fontWeight="medium"
  //     color={mode('gray.600', 'gray.300')}
  //     {...rest}
  //     _activeLink={{
  //       color: mode('deepBlue.500', 'skyBlue'),
  //       fontWeight: 'medium',
  //     }}
    
  //   />
  // )
  return (
    <Link
      href={href}
      {...rest}
    />
  )
}

interface MobileNavLinkProps {
  icon: React.ElementType
  children: React.ReactNode
  href?: string
}

const MobileNavLink = (props: MobileNavLinkProps) => {
  const { icon, children, href } = props
  return (
    <Flex
      as="a"
      href={href}
      m="-3"
      p="3"
      align="center"
      rounded="md"
      cursor="pointer"
      _hover={{ bg: mode('gray.50', 'gray.600') }}
    >
      <Icon as={icon} color={mode('red.100', 'red.100')} fontSize="xl" />
      <Box marginStart="3" fontWeight="medium">
        {children}
      </Box>
    </Flex>
  )
}

export const NavLink = {
  Desktop: DesktopNavLink,
  Mobile: MobileNavLink,
}
