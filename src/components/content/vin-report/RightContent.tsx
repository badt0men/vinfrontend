import { Box, Heading, Text, useColorModeValue as mode} from '@chakra-ui/react'
import React from 'react'

export const RightContent = ({data}:any) => {
  return (
      <>
          <Box w="40%" pt="4" h="100vh" overflowY="auto" bgColor={mode("skyBlue", "deepBlue.100")} visibility={['hidden', 'visible']}>
              <Box py="8" px="8" mx="auto">
                  <Heading as="h1" fontWeight="medium" fontSize="14px" pb="8" textAlign="left" textTransform="uppercase">Vehicle Identification Report </Heading>
                  <Text fontWeight="medium" textTransform="uppercase" color="teal">{data?.years[0]?.year + ' ' + data?.make?.name + ' ' + data?.model?.name}</Text>
              </Box>
          </Box>
      </>
  )
}
