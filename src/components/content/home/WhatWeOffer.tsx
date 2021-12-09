import React from 'react'
import { Box, Flex, Heading, List, Image, ListItem, useColorModeValue as mode, VStack, HStack } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

const ListIcon = <Image src="../image/icons/point.svg" boxSize="16px" objectFit="contain" alt="searchIcon"  />

export default function WhatWeOffer() {
    return (
        <Box maxW="7xl" mx="auto" bg={mode('skyBlue', 'deepBlue.100')}>
            <Flex p={["8","16"]} py={["16", "20"]}>
                <Box  maxW="5xl" px={[0, 20]}>
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
                <Box>
                
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