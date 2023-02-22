import { Box, Button, Image, Stack, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
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
    
    <Stack h={'500px'}>
      <Stack direction={'row'}>
        <VStack>
            <Text>{product && product.item_design}</Text>
            <VStack>
                <Box>Item Info</Box>
            <Text>{product.item_color}</Text>
            </VStack> 
        </VStack>
        <Image src={product.item_img} alt={product.item_design} />
      </Stack>
      <Stack>
        <Button colorScheme={'black'}>Add to Card</Button>
      </Stack>
    </Stack>
  )
}
// cards:(3) ['Anna Sui', 'SSENSE Exclusive Black Crochet Bucket Hat', '$255']
// item_color:"Crochet acrylic bucket hat in black.<br><br>· Floral detailing throughout<br>· Scalloped edges at brim <br><br>Available exclusively at SSENSE. <br><br>Supplier color: Orange/Multi"
// item_desc:"SSENSE Exclusive Black Crochet Bucket Hat"
// item_design:"Anna Sui"
// item_id:"1658554184-392"
// item_img:"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222894M140001_1/anna-sui-ssense-exclusive-black-crochet-bucket-hat.jpg"
// iten_price:"$255 "

export default ProductDetails
