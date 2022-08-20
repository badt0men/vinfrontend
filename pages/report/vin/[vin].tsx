import { Box, Flex, useColorModeValue as mode, } from '@chakra-ui/react'
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import LeftContent from '../../../src/components/content/vin-report/LeftContent';
import { RightContent } from '../../../src/components/content/vin-report/RightContent';
import { useAppSelector } from '../../../state/store';

export default function Vin() {
    const vin = useAppSelector(state => state.vin.value);
    const [data, setData] = useState<any>();

    const END_POINT = process.env.VIN_URI + vin + `?apikey=` + process.env.VIN_API_KEY
    useEffect(() => {
            const fetchData = async () => {
            const res =  await fetch(END_POINT)
            const data = await res.json()
            setData(data)
        };
        fetchData();
    }, [END_POINT])
    
    
    return (<>
    <Head>
        <title>Vehicle Report - {process.env.title}</title>
    </Head>
    <Box w="100%">
        <Flex w='100%' h="100vh" mx="auto" flexDirection={{base:'column', md: 'column', lg:'row'}}>
            <LeftContent data={data}/>
            <RightContent data={data} />
        </Flex>
    </Box>
    </>)
}
