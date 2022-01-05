import { Box, Flex, Heading, Spacer, Text, useColorModeValue as mode, VStack } from '@chakra-ui/react'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import vinStore from '../../../store/store';

export default function Vin() {
    const vin = vinStore(state => state.vin)
    const [data, setData] = useState({
        make:{
            name: "",
        },
        model:{
            name: "",
        },
        years: [],
    })
    useEffect(() => {
        const END_POINT = process.env.VIN_URI+vin+`?apikey=`+process.env.VIN_API_KEY
        fetch(END_POINT)
        .then(res => res.json())
        .then(data => setData(data))
        console.log()
    },[vin]);
    
    // if (!data || !data.make) {
    //     return(
    //     <>
    //     <Box maxW="7xl" mx="auto">
    //     <Box py="12" maxW="5xl" mx="auto" mb="16">
    //         <Heading as="h1" fontSize="26px" py="8">Nothing is found for this VIN... please try another</Heading>
    //     </Box>
    //     </Box>
    //     </>
    //     )   
    // }
    // else {
    //     return (
    //     <>
    //     <Box maxW="7xl" mx="auto">
    //     <Box py="12" maxW="5xl" mx="auto">
    //         <Heading as="h1" fontSize="32px">Hey Chief... I Know this doesn&apos;t look so good to you. Don&apos;t fret. I&apos;m working on the UI</Heading>
    //         <Heading as="h1" fontSize="26px" py="8">But for this VIN: The Vehicle is a <span style={{color:'red'}}>{data?.make?.name } {data?.model?.name} </span></Heading> 
    //     </Box>
    //     <Box maxW="5xl" mx="auto">
    //         <Text>{JSON.stringify(data)}</Text>
    //     </Box>
    //     </Box>
    //     </>
    //     )
    // }
    return (<>
    <Box w="100%">
        <Flex>
            <Box w="60%" py="8" pos="relative">
            <Box bg={mode("#cfd3df", "#1d273a")} borderBottomRadius="4px" h="40px" w="100%" pos="absolute" top={0} left={0} >
                <Flex maxW="90%" mx="auto">
                    <Link href="/">
                    <Heading as="h1" fontWeight="medium" p="3" fontSize="14px" color="blue.500">Home</Heading>
                    </Link>
                    <Heading as="h1" fontWeight="medium" p="3" fontSize="14px">/</Heading>
                    <Link href="#">
                    <Heading as="h1" fontWeight="medium" p="3" fontSize="14px" color="blue.500">Vehicle Report</Heading>
                    </Link>
                    <Heading as="h1" fontWeight="medium" p="3" fontSize="14px" >/</Heading>
                    <Link href="#" >
                    <Heading as="h1" fontWeight="medium" p="3" fontSize="14px">Check {vin}</Heading>
                    </Link>
                </Flex>
            </Box>
            <Box px="8" mx="auto" mt="40px" maxH="80vh" pb="20%" overflowY="auto">
                <VStack>
                <Text fontWeight="regular" fontSize="16px">Hey Chief... I Know this doesn&apos;t look so good to you. Don&apos;t fret. I&apos;m working on the UI As part of our giveback to the community, ONGAD provides basic free VIN check report to the public to determine the vehicle is a lemon, salvaged or has flooded condition. We also provide historical mileage/sales records for free! No credit card required!
                </Text>
                <Text fontWeight="regular" fontSize="16px">Hey Chief... I Know this doesn&apos;t look so good to you. Don&apos;t fret. I&apos;m working on the UI As part of our giveback to the community, ONGAD provides basic free VIN check report to the public to determine the vehicle is a lemon, salvaged or has flooded condition. We also provide historical mileage/sales records for free! No credit card required!
                </Text>
                <Text fontWeight="regular" fontSize="16px">Hey Chief... I Know this doesn&apos;t look so good to you. Don&apos;t fret. I&apos;m working on the UI As part of our giveback to the community, ONGAD provides basic free VIN check report to the public to determine the vehicle is a lemon, salvaged or has flooded condition. We also provide historical mileage/sales records for free! No credit card required!
                </Text>
                <Text fontWeight="regular" fontSize="16px">Hey Chief... I Know this doesn&apos;t look so good to you. Don&apos;t fret. I&apos;m working on the UI As part of our giveback to the community, ONGAD provides basic free VIN check report to the public to determine the vehicle is a lemon, salvaged or has flooded condition. We also provide historical mileage/sales records for free! No credit card required!
                </Text>
                <Text fontWeight="regular" fontSize="16px">Hey Chief... I Know this doesn&apos;t look so good to you. Don&apos;t fret. I&apos;m working on the UI As part of our giveback to the community, ONGAD provides basic free VIN check report to the public to determine the vehicle is a lemon, salvaged or has flooded condition. We also provide historical mileage/sales records for free! No credit card required!
                </Text>
                <Text fontWeight="regular" fontSize="16px">Hey Chief... I Know this doesn&apos;t look so good to you. Don&apos;t fret. I&apos;m working on the UI As part of our giveback to the community, ONGAD provides basic free VIN check report to the public to determine the vehicle is a lemon, salvaged or has flooded condition. We also provide historical mileage/sales records for free! No credit card required!
                </Text>
                <Text fontWeight="regular" fontSize="16px">Hey Chief... I Know this doesn&apos;t look so good to you. Don&apos;t fret. I&apos;m working on the UI As part of our giveback to the community, ONGAD provides basic free VIN check report to the public to determine the vehicle is a lemon, salvaged or has flooded condition. We also provide historical mileage/sales records for free! No credit card required!
                </Text>
                <Text fontWeight="regular" fontSize="16px">Hey Chief... I Know this doesn&apos;t look so good to you. Don&apos;t fret. I&apos;m working on the UI As part of our giveback to the community, ONGAD provides basic free VIN check report to the public to determine the vehicle is a lemon, salvaged or has flooded condition. We also provide historical mileage/sales records for free! No credit card required!...
                </Text>
                </VStack>
            </Box>
            </Box>
            <Box w="40%" py="8" h="100vh" bgColor={mode("skyBlue","deepBlue.100")} zIndex="-10">
                <Box py="8" px="8" mx="auto">
                    <Heading as="h1" fontWeight="medium" fontSize="18px" pb="8" textAlign="center">VEHICLE IDENTIFICATION REPORT </Heading>
                    <Text fontWeight="medium" textTransform="uppercase" color="blue.500">{data?.years[0]?.year} {data?.make?.name } {data?.model?.name}</Text>
                </Box>
            </Box>
        </Flex>
    </Box>
    </>)
}