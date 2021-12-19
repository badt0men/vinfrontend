import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import vinStore from '../../store/store'

export default function Vin() {
    const vin = vinStore(state => state.vin)
    const [data, setData] = useState({
        make:{
            name: "",
        },
        model:{
            name: "",
        },
    })
    
    console.log("ViN DATA: "+vin)
    const END_POINT = "https://auto.dev/api/vin/"+vin+"?apikey="+process.env.VIN_API_KEY
    useEffect(() => {
        fetch(END_POINT)
        .then(res => res.json())
        .then(data => setData(data))
    },[]);
    
    return (
        <>
        <Box maxW="7xl" mx="auto">
        <Box py="12" maxW="5xl" mx="auto">
            <Heading as="h1" fontSize="32px">Hey Chief... I Know this doesn't look so good to you. Don't fret. I'm working on the UI</Heading>
            <Heading as="h1" fontSize="26px" py="8">But for this VIN: The Vehicle is a <span style={{color:'red'}}>{data.make.name } {data.model.name} </span></Heading>
        </Box>
        <Box maxW="5xl" mx="auto">
            <Text>{JSON.stringify(data)}</Text>
        </Box>
        </Box>
        
        </>
    )
}