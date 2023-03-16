import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function WomensProductCard() {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  const AddtoCart = async data => {
    try {
       await axios.post(
        `https://server-ssense-clone.onrender.com/cartData`,
        data
      );
    } catch (error) {
      alert('Error while adding item to Cart.');
    }
  };

  const AddtoWishlist = async data => {
    try {
       await axios.post(
        `https://server-ssense-clone.onrender.com/wishListData`,
        data
      );

      alert('Item Added to Wishlist Successfully!!');
    } catch (error) {
      alert('Error while adding item to Wishlist.');
    }
  };

  async function GetProduct(id) {
    setLoading(true);
    try {
      let res = await axios.get(
        `https://server-ssense-clone.onrender.com/womenData?id=${id}`
      );
      setProduct(res.data[0]);
      setLoading(false);
    } catch (error) {}
  }
  useEffect(() => {
    GetProduct(params.id);

  }, [params.id]);
  if (loading) {
    return <Box>....Loading</Box>;
  }
  return (
    <Stack p={'6rem'}>
      <Stack direction={'row'} spacing={'20%'}>
        <Image w="20%" src={product.itemImg} alt={product.des} />
        <VStack>
          <Heading>{product && product.title}</Heading>
          <VStack>
            <Box fontSize="24px">Item Info</Box>
            <Text m="auto">Description : {product.des}</Text>
            <Text w="80%" m="auto">
              Price : {product.price}
            </Text>
            <Box>
              <Button
                onClick={() => AddtoCart(product)}
                backgroundColor={'black'}
                color="white"
                w="85%"
                borderRadius="0px"
                p="10px"
                m={'15px 20px'}
              >
                Add To Cart
              </Button>
              <Button
                onClick={() => AddtoWishlist(product)}
                backgroundColor={'black'}
                color="white"
                w="85%"
                borderRadius="0px"
                p="10px"
                m={'15px 20px'}
              >
                Add To Wishlist
              </Button>
            </Box>
          </VStack>
        </VStack>
      </Stack>
      <Stack></Stack>
    </Stack>
  );
}

export default WomensProductCard;
