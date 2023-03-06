import { Box, Button,Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MensProductCard() {
    const params= useParams();
    const [loading,setLoading]= useState(false);
    const [product,setProduct]= useState({});

   async function GetProduct(id){
    setLoading(true);    
    try{ 
           let res= await axios.get(`https://server-ssense-clone.onrender.com/mensData?item_id=${id}`);
           setProduct(res.data[0]);
           setLoading(false);
        }
        catch(error){

        }
    }
    useEffect(()=>{
        GetProduct(params.id)

    //   console.log(params);
    },[params.id])
    console.log(product.cards)
  if(loading){
    return <Box>....Loading</Box>
  }
    return (
    
    <Stack p={"6rem"}>
      <Stack direction={'row'}>
        <Image w="30%" src={product.item_img} alt={product.item_design} />
        <VStack>
            <Heading >{product && product.item_design}</Heading>
            <VStack>
                <Box fontSize="24px">Item Info</Box>
            <Text w="50%" m='auto'>{product.item_color}</Text>
           <Box >
            <Button backgroundColor={'black'} color='white' w='85%' borderRadius='0px' p="10px" m={'15px 20px' }>Add To Cart</Button>
           </Box>
            </VStack> 
        </VStack>
      </Stack>
      <Stack>
      </Stack>
    </Stack>
  )
}

export default MensProductCard
