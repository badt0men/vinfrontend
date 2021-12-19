import React, {useState, useRef} from 'react';
import {Box, Flex, Heading, Text, VStack, Input, Button, Stack} from '@chakra-ui/react'
import {RiSearch2Line} from 'react-icons/ri'
import vinStore from '../../../../store/store';
import Router from 'next/router'

export default function HeroSection():JSX.Element {

  const vin = vinStore(state => state.vin)
  const setVin = vinStore(set => set.setVin)
  const vinRef = useRef(vin)
  
  const searchVin = (e:any) => {
    e.preventDefault()
    setVin(vinRef.current.value)
    const {pathname} = Router
    if(pathname == '/' ){
        Router.push("/vin/"+vinRef.current.value)
    }
  }
  
  
  return (
    <Box w="full" mx="auto" minH="550" bgImage="url('../image/slide/car.jpeg')" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" bgBlendMode="multiply">
      <Box position="absolute" bgColor="heroOverlay" w="full" h="550">
          <Box maxW="7xl" mx="auto" py={{base: '16', md: '24'}} px={{ base: '8', md: '14' }}>
               <Flex justify="end">
                      <VStack>
                      <Box>
                          <Heading as="h1" fontSize={{base: '40px', md: '68px'}} textShadow="0px 4px 4px rgba(255, 255, 255, 0.33)" color="skyBlue">Shine Your Eyes</Heading>
                      </Box>
                      <Box justify="start">
                          <Heading as="h2" fontSize={{base: '20px', md: '28px'}} py="2" color="skyBlue">Check Am Before You Buy Am</Heading>
                      </Box>
                      <form onSubmit={searchVin}>
                       {/* Search box */}
                      <Box w="full" py="8">
                          <Stack direction={['column', 'row']} spacing="4">
                              <Box w={['100%', '75%']}>
                                <Input ref={vinRef} fontSize="14px" fontWeight="medium" placeholder='Enter VIN' color="skyBlue"  focusBorderColor="skyBlue" textTransform="uppercase" letterSpacing="8px" />
                              </Box>
                              <Box>
                                <Button type="submit" w={['100%', '100%']} bgGradient="linear(to-t, red.200, red.100)" rounded="md" color="white" _hover={{bgGradient: "linear(to-r, red.200, red.100)"}} fontSize="13px" fontWeight="medium">
                                  <RiSearch2Line size="26" />
                                  Search</Button>
                              </Box>
                          </Stack>
                          <Text fontSize="11px" fontStyle="italic" py="2" color="skyBlue">Click here to test with a random VIN. </Text>
                          <Box>
                              <Heading as="h4" fontSize={{base: '16', md:'18'}} color="skyBlue" fontWeight="regular" py="2" pr={{base: '4', md:'0'}}>Research any vehicle by VIN Number for free. Be Smart.</Heading>
                          </Box>
                      </Box>
                      </form>
                      {/* Search Box End */}
                      </VStack>
               </Flex>
          </Box>
      </Box>
    </Box>
  );
}
