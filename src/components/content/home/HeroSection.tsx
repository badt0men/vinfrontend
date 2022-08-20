import React, {useRef} from 'react';
import {Box, Flex, Heading, Text, VStack, Input, Button, Stack, BoxProps} from '@chakra-ui/react'
import {RiSearch2Line} from 'react-icons/ri'
import Router from 'next/router'
import { motion } from 'framer-motion'
import { useAppSelector, useAppDispatch } from '../../../../state/store';
import { setVin } from '../../../../state/slices/vinSlice';
import { fetchVinData } from '../../../../state/slices/vehicleReportSlice';

export const MotionBox = motion<BoxProps>(Box)

export default function HeroSection(): React.ReactElement {
  
  const vin = useAppSelector(state => state.vin.value);
  const dispatch = useAppDispatch();
  const inputRef = useRef<any>(vin);

  //handle the vin Chnage event
  const handleChange = () => {
    dispatch(setVin(inputRef.current.value))
  
  }
 // Search the vin 
  const searchVin = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    dispatch(fetchVinData(vin))
    
    const {pathname} = Router
    if(pathname === '/' ){
        Router.push("/report/vin/" + vin)
    }
  }
  // Generate random vin numbers
  const generateVIN = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    //Generating Random VIN
    const testVIN = [
      '5TENX22N76Z245036',
      'WBA5B3C50GG252337',
      'SCBFR7ZA5CC072256',
      '4F2YU09152KM31556',
    ]
    const randomVinIndex = Math.floor(Math.random() * testVIN.length)
    const randomVIN = testVIN[randomVinIndex];
    inputRef.current.value = randomVIN
    dispatch(setVin(inputRef.current.value))
  }
  
  return (
    <Box w="100%" mx="auto" h="600" bgImage="url('../image/slide/car.jpeg')" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" bgBlendMode="multiply">
      <Box position="absolute" bgColor="heroOverlay" w="100%" h="600">
          <Box w="100%" mx="auto" py={{base: '16', md: '24'}} px={{ base: '8', md: '14' }}>
               <Flex justify="end">
            <Flex flexDirection="column" w={{ base: "100%", md: "50%" }} mt={{ base: "50px" }} className="centerText">
                      <MotionBox initial={{ opacity: 0, x: 150 }} animate={{ opacity: 1, x: 0, transition:{ fade: 'fadeIn' ,duration: 0.5, delay: .5 } }} >  
                          <Heading as="h1" fontSize={{base: '40px', md: '60px'}} textShadow="0px 4px 4px rgba(255, 255, 255, 0.33)" color="skyBlue">Shine Your Eyes</Heading>
                      </MotionBox>
                      <MotionBox initial={{ opacity: 0, x: 150 }} animate={{ opacity: 1, x: 0 ,transition:{ fade: 'fadeIn' ,duration: 0.5, delay: 1 }}}>
                      <Box>
                  <Heading as="p" fontSize={{ base: '20px', md: '28px' }} pt="8" color="skyBlue">Ensure your <span className="emphasisColor">NEXT</span> vehicle is not watermelon. Run a free check.
                          </Heading>
                      </Box>
                      </MotionBox>
                      <form onSubmit={searchVin}>
                       {/* Search box */}
                       
                      <Box w="100%" py="8">
                      <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{ fade: 'fadeIn' ,duration: 1, delay: 1.5 }}}>
                          <Stack direction={['column', 'row']} spacing="4">
                              <Box w={['100%', '70%']}>
                                <Input ref={inputRef} fontSize="14px" fontWeight="medium" placeholder='Enter VIN' color="white"  focusBorderColor="teal" textTransform="uppercase" letterSpacing="8px" onChange={handleChange} required />
                              </Box>
                              <Box>
                                <Button type="submit" w={['100%', '100%']} bgGradient="linear(to-t, red.200, red.100)" rounded="md" color="white" _hover={{bgGradient: "linear(to-r, red.200, red.100)"}} fontSize="12px" fontWeight="medium">
                                  <RiSearch2Line size="20" />
                              <span style={{marginLeft: '10px'}}>Search</span>
                            </Button>
                              </Box>
                          </Stack>
                          <Text fontSize="11px" fontStyle="italic" py="2" color="skyBlue" cursor="pointer">
                            <span onClick={generateVIN}>
                            Click here to test with a random VIN.
                            </span>
                          </Text>
                          </MotionBox>
                          <MotionBox initial={{ opacity: 0, x: 150 }} animate={{ opacity: 1, x: 0, transition:{ fade: 'fadeIn' ,duration: 1, delay: 1.7 } }}>
                              <Heading as="h4" fontSize={{base: '14', md:'16'}} color="skyBlue" fontWeight="regular" py="8" pr={{base: '4', md:'0'}}>Research any vehicle by VIN Number for free. Be Smart.</Heading>
                          </MotionBox>
                      </Box>
                       
                      </form>
                      {/* Search Box End */}
                      </Flex>
               </Flex>
          </Box>
      </Box>
    </Box>
  );
}
