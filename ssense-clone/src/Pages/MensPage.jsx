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
  
  axios.get('https://server-ssense-clone.herokuapp.com/mensData')
  .then((res)=>{
    console.log(res.data)
    setData(res.data)
  })
    .catch((err)=>(
      console.log(err)
    ))

  

},[])
   
  // getData()
  return (
    <>
    <Stack display="flex" flexDirection="row" justifyContent="space-evenly">
    <Box h="auto" w="15%" border="1px solid red" p="10px">
      <Filter />
      </Box>    
    <Grid h="auto" w="60%" p={[1]} border="1px solid black"templateColumns='repeat(4, 1fr)' templateRows="auto">
      {data.map((el)=>{
        
        console.log(el)
        return(
          <GridItem>
          <Link to={el.id}>
          <Image w="auto" h="80%" m="auto" src={el.itemImg}/>
          <Box justifyItems="center" textAlign="left" fontSize="11px" fontFamily="Arial,Sans-Serif" m="5px" >
          <Text as="p" >{el.title}</Text>
          <Text as="p" >{el.des}</Text>
          <Text as="p">$ {el.price} </Text>
          </Box>
            </Link>
            </GridItem>
        )
        })}</Grid>    
    <Box h="500px" w="15%" border="1px solid pink"> <Sorting /> </Box>    
    </Stack>
    <Footer />
    </>
  )
}

export default MensPage
