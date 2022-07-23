import { Box, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Sorting() {
    const Sort_Data = {
        Sorting:[
            "Latest arrivals","Trending","Price: Low to high","Price: High to low"
        ],
        Colors:[
            "ALL COLORS",
            "Black",
            "Blue",
            "Brown",
            "Burgundy",
            "Gray",
            "Green",
            "Navy",
            "Orange",
            "Pink",
            "Purple",
            "Red",
            "Tan",
            "White",
            "Yellow",
        ]
    }
  return (
    <Stack justifyContent="center" pl="12px" textTransform="uppercase" fontSize="11px" fontFamily="Arial,Sans-Serif">
       <VStack alignItems="flex-start" pl={[1]} fontWeight="400" pb="25px">
         <Heading as="h2" fontSize="14px" textDecoration="underline"> Sort</Heading>
        <Box fontSize="12px" flexDirection="column" >{
            Sort_Data.Sorting.map((el)=>(
                <Box key={el} _hover={{textDecoration:"underline"}}><Link  ml="0" to={`./${el}`}> {el}</Link></Box>
            ))} </Box>
            </VStack>
            <VStack alignItems="flex-start" pl={[1]} pb="20px"> <Heading as="h2" fontSize="14px"> Colors</Heading>
        <Box fontSize="12px" flexDirection="column">{
            Sort_Data.Colors.map((el)=>(
                <Box key={el} _hover={{textDecoration:"underline"}}><Link  ml="0" to={`./${el}`} > {el}</Link></Box>
            ))} </Box>
            </VStack> 
    </Stack>
  )
}

export default Sorting
