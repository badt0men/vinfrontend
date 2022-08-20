import { Box, Flex, useColorModeValue as mode, } from '@chakra-ui/react'
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import LeftContent from '../../../src/components/content/vin-report/LeftContent';
import { RightContent } from '../../../src/components/content/vin-report/RightContent';
import { useAppSelector, useAppDispatch } from '../../../state/store';

export default function Vin() {
    const vin:string = useAppSelector(state => state.vin.value)
    const [vinData, setVinData] = useState<any>()
    const { data } = useAppSelector(state => state.vehicleReport)
    
    useEffect(() => { 
        const local:any = localStorage.getItem('vin-data')
        const localData = JSON.parse(local)
        if (localData.vin !== vin){
            setVinData(data)
        }
        setVinData(localData)
    }, [data, vin]);
    
    return (<>
    <Head>
        <title>Vehicle Report - {process.env.title}</title>
    </Head>
    <Box w="100%">
        <Flex w='100%' h="100vh" mx="auto" flexDirection={{base:'column', md: 'column', lg:'row'}}>
            <LeftContent data={vinData}/>
            <RightContent data={vinData} />
        </Flex>
    </Box>
    </>
    )
}