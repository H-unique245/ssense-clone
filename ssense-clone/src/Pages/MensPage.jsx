import { Box, Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Filter from '../Components/Filter'
import Footer from '../Components/Footer'
import Sorting from '../Components/Sorting'

function MensPage() {

  const [data,setData]= useState([])
  

useEffect(()=>{
  
  axios.get('https://server-ssense-clone.onrender.com/mensData')
  .then((res)=>{
    /* console.log(res.data)*/
    setData(res.data)
  })
    .catch((err)=>(
      console.log(err)
    ))

  

},[])
   
  // getData()
  return (
    <>
    <Stack display="flex" flexDirection="row" justifyContent="space-evenly" pb="20px">
    <Box h="auto" w="12%"  p="10px">
      <Filter />
      </Box>    
    <Grid h="auto" w="70%" p={[2]} templateColumns='repeat(4, 1fr)' templateRows="auto" gap="10px">
      {data.map((el)=>{
        
        /* console.log(el) */
        return(
          <GridItem key= {el.item_id}>
          <Link to={el.item_id}>
            <Box>
            <Box h="70%">
          <Image mw="100%" h="70vh" m="auto" src={el.item_img}/>
          </Box>
          <Box justifyItems="center" textAlign="left" fontSize="11px" fontFamily="Arial,Sans-Serif" m="5px" >
          <Text as="p" >{el.item_design}</Text>
          <Text as="p" >{el.item_desc}</Text>
          <Text as="p"> {el.iten_price} </Text>
          </Box>
          </Box>
            </Link>
            </GridItem>
        )
        })}</Grid>    
    <Box h="500px" w="12%" p={[1]} > <Sorting /> </Box>    
    </Stack>
    <Footer />
    </>
  )
}

export default MensPage
