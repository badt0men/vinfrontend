import React from 'react'
import { Box, Flex, Heading, List, Image, ListItem, useColorModeValue as mode, VStack, HStack, Button, Spacer } from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'

const ListIcon = <Image src="../image/icons/point.svg" boxSize="16px" objectFit="contain" alt="searchIcon"  />

export default function WhatWeOffer() {
    return (
        <Box maxW="7xl" mx="auto" bg={mode('skyBlue', 'deepBlue.100')} minH={["800", "0"]}>
            <Flex pl={["0","16"]} py={["16", "20"]}  direction={["column", "row"]} bgImage="url('../image/icons/girlie.svg')" bgPosition={["center 100%", "center right"]} bgRepeat="no-repeat" bgSize={["400px", "750px"]}>
                <Box px={[0, 20]} pb={["40", "0"]}>
                    <VStack>
                        <Box>
                        <Heading as="h1" fontSize={["18","22"]} fontWeight="medium" color={mode('deepBlue.100', 'skyBlue')}>What we Offer</Heading>
                        <Heading as="h2" fontSize={["20","28"]} py="8" color={mode('headingColor', 'skyBlue')} fontWeight="medium">We provide Naija with<br/> the most comprehensive<br/> and up to date report in the market</Heading>
                        <List spacing={3} >
                                {listText.map(list => (
                                <ListItem pt="2" key={list.id}>
                                    <HStack>
                                    {ListIcon} 
                                    <Heading as="p" fontSize="15" fontWeight="medium"  color={mode('headingColor', 'skyBlue')}>
                                    {list.text}
                                    </Heading>
                                    </HStack>
                                </ListItem>
                                ))}
                            </List>
                            <Box>
                                <Heading as="h3" fontSize="12" textAlign="left" py="8"><Link href="/">Plus lots more...</Link> </Heading>
                                <Button bgGradient="linear(to-t, deepBlue.500, deepBlue.100)" mt={["2","8"]} color="white" rounded="lg" fontWeight="medium" _hover={{bgGradient:"linear(to-r, deepBlue.100, deepBlue.500)"}}>
                                    <HStack> 
                                    <Heading as="p" fontSize="14">Find out more</Heading> 
                                    <BsArrowRight />
                                    </HStack>
                                </Button> 
                            </Box>
                            <Spacer />
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