import { Box, Button, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Index() {
    return (
        <>
        <Head>
            <title>Page Not Found - {process.env.title}</title>
        </Head>
        <Box maxW="7xl" mx="auto">
            <Box py="24" maxW="5xl" mx="auto" mb="16">
                <Heading as="h1" fontSize="26px" py="8">Oh snap! 404 reached.</Heading>
                <Text pb="4">The page and content you seek is nowhere around now for. Please, do check back later.</Text>
                <Link href="/" passHref>
                    <Button> Return home</Button>
                </Link>
                
            </Box>
        </Box>
        </>
    )
}
