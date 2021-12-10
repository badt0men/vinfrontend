import React from 'react'
import { Box, Flex, Heading, List, Image, ListItem, useColorModeValue as mode, VStack, HStack } from '@chakra-ui/react'

const ListIcon = <Image src="../image/icons/point.svg" boxSize="16px" objectFit="contain" alt="searchIcon"  />

export default function WhatWeOffer() {
    return (
        <Box maxW="7xl" mx="auto" bg={mode('skyBlue', 'deepBlue.100')} minH={["800", "0"]}>
            <Flex p={["8","16"]} py={["16", "28"]}  direction={["column", "row"]} bgImage="url('../image/icons/girlie.svg')" bgPosition={["center 100%", "center right"]} bgRepeat="no-repeat" bgSize={["400px", "750px"]}>
                <Box px={[0, 20]} pb={["40", "0"]}>
                    <VStack>
                        <Box>
                        <Heading as="h1" fontSize={["18","22"]} fontWeight="medium" color={mode('deepBlue.100', 'skyBlue')}>What we Offer</Heading>
                        <Heading as="h2" fontSize={["20","28"]} py="8" color={mode('headingColor', 'skyBlue')} fontWeight="medium">We provide Naija with<br/> the most comprehensive<br/> and up to date report in the market</Heading>
                        <List spacing={3} >
                                {listText.map(list => (
                                <ListItem pt="2" key={list.id} >
                                    <HStack>
                                    {ListIcon} 
                                    <Heading as="p" fontSize="15" fontWeight="medium"  color={mode('headingColor', 'skyBlue')}>
                                    {list.text}
                                    </Heading>
                                    </HStack>
                                </ListItem>
                                ))}
                            </List>
                            
                        </Box>
                    </VStack>
                </Box>
                
            </Flex>
        </Box>
    )
}


const listText = [
    {
        id: 1,
        text: 'Vehicle financial liability check',
    },
    {
        id: 2,
        text: 'Odometer check',
    },
    {
        id: 3,
        text: 'Vehicle valuation & registration details',
    },
    {
        id: 4,
        text: 'National view of the vehicle history',
    },
    {
        id: 5,
        text: 'ANCAP safety & emission ratings',
    },
    {
        id: 6,
        text: 'Damages, stolen status, and write-off check',
    },
]