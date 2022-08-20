import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function index() {
    return (
        <Box w="100%" mx="auto">
            <Box w={["100%", "80%"]} mx="auto">
                <Box py="16">
                    <Heading as="h1" fontSize="24px">Career Page</Heading>
                </Box>
            </Box>
        </Box>
    )
}
