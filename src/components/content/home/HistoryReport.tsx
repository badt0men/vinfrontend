import { Box, Heading, useColorModeValue as mode } from '@chakra-ui/react';
import React from 'react';

export default function HistoryReport() {
  return (
    <Box maxW="7xl" mx="auto">
        <Box justify="center">
            <Heading as="h1" fontSize={['25', '37']} pt="20" textAlign="center" color={mode('headingColor', 'skyBlue')} fontWeight="medium">
            Shorten And Amplify Your<br/>
            Car History Report
            </Heading>

            <Heading as="h2" fontSize={['15', '25']} py="10" textAlign="center" color={mode('subHeadingColor', 'skyBlue')} fontWeight="regular">
                Meet Our Intuitive Platform
            </Heading>
        </Box>
    </Box>
  );
}
