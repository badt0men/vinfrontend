import { Box, Heading, SimpleGrid, useColorModeValue as mode, VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';

const searchIcon = <Image src="../image/icons/search-alt.svg" boxSize="36px" objectFit="contain" alt="searchIcon" mt="6"  />
const dataIcon = <Image src="../image/icons/data.svg" boxSize="36px" objectFit="contain" alt="dataIcon" mt="6"  />
const paymentIcon = <Image src="../image/icons/payment.svg" boxSize="36px" objectFit="contain" alt="paymentIcon" mt="6"  />
const reportIcon = <Image src="../image/icons/report.svg" boxSize="36px" objectFit="contain" alt="reportIcon" mt="6"  />

export default function HistoryReport() {
  return (
    <Box maxW="7xl" mx="auto">
        <Box justify="center">
            <Heading as="h1" fontSize={['25', '37']} pt="20" textAlign="center" color={mode('headingColor', 'skyBlue')} fontWeight="medium">
            Shorten And Amplify Your<br/>
            Car History Report
            </Heading>

            <Heading as="h2" fontSize={['14', '22']} py="10" textAlign="center" color={mode('subHeadingColor', 'skyBlue')} fontWeight="regular">
                Meet Our Intuitive Platform
            </Heading>
        </Box>
        <Box py="6">
            <Box maxW="5xl" mx="auto" p={[4, 8]}>
                <SimpleGrid columns={[2, 4]} spacing="10">
                    <Box bg={mode('white', 'deepBlue.100')} h="180px" w="180px" shadow="lg">
                      <VStack px="4">
                        {searchIcon}
                        <Heading as="h1" fontSize={['12', '14']} textAlign="center" fontWeight="medium" mt="4">Enter your VIN </Heading>
                        <Text fontSize={['12', '14']}>-----------</Text>
                        <Text fontSize={['11', '11']} textAlign="center" fontWeight="regular" color={mode('subHeadingColor', '')} >The only thing you need to know to get started</Text>
                      </VStack>
                    </Box>
                    <Box bg={mode('white', 'deepBlue.100')} h="180px" w="180px" shadow="lg">
                      <VStack px="4">
                        {dataIcon}
                        <Heading as="h1" fontSize={['12', '14']} textAlign="center" fontWeight="medium" mt="4">Data Search</Heading>
                        <Text fontSize={['12', '14']}>-----------</Text>
                        <Text fontSize={['11', '11']} textAlign="center" fontWeight="regular" color={mode('subHeadingColor', '')} >The only thing you need to know to get started</Text>
                      </VStack>
                    </Box>
                    <Box bg={mode('white', 'deepBlue.100')} h="180px" w="180px" shadow="lg">
                      <VStack px="4">
                        {paymentIcon}
                        <Heading as="h1" fontSize={['12', '14']} textAlign="center" fontWeight="medium" mt="4">Secure Payment </Heading>
                        <Text fontSize={['12', '14']}>-----------</Text>
                        <Text fontSize={['11', '11']} textAlign="center" fontWeight="regular" color={mode('subHeadingColor', '')} >The only thing you need to know to get started</Text>
                      </VStack>
                    </Box>
                    <Box bg={mode('white', 'deepBlue.100')} h="180px" w="180px" shadow="lg">
                      <VStack px="4">
                        {reportIcon}
                        <Heading as="h1" fontSize={['12', '14']} textAlign="center" fontWeight="medium" mt="4">Get your Report </Heading>
                        <Text fontSize={['12', '14']}>-----------</Text>
                        <Text fontSize={['11', '11']} textAlign="center" fontWeight="regular" color={mode('subHeadingColor', '')} >The only thing you need to know to get started</Text>
                      </VStack>
                    </Box>
                </SimpleGrid>
                <Box>
                    <Heading as="p" fontSize={['17', '19']} textAlign="center" my="16" color={mode('subHeadingColor', '')} fontWeight="light">
                    As part of our giveback to the community, ONGAD provides <b>basic free VIN check report</b><br/> to the public to determine the vehicle is a lemon, salvaged or has flooded condition.<br/> We also provide historical mileage/sales records for free! No credit card required!
                    </Heading>
                </Box>
            </Box>
        </Box>
    </Box>
  );
}
