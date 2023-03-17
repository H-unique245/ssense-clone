import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Text,
  VStack,
  Button,
  Container,
  HStack,
  Box,
  TableCaption,
} from '@chakra-ui/react';
import {BiShoppingBag} from "react-icons/bi"
import { useNavigate } from 'react-router-dom';

function ShoppingBag() {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const naviagte= useNavigate();


  const getCartData = async () => {
    let res = await axios.get(
      `https://server-ssense-clone.onrender.com/cartData`
    );
    setCartData(res.data);
    // const cal_price = cartData?.reduce(
    //   (acc, product) => (acc += product.price),
    //   0
    // );
    // setTotalPrice(cal_price);
  };

  const deleteProduct = async id => {
    setLoading(true);
    try {
      await axios.delete(
        `https://server-ssense-clone.onrender.com/cartData/${id}`
      );
      getCartData();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
// effect for cart data
  useEffect(() => {
    getCartData();
    // console.log("data rendered!!!")
  }, []);

  // effect for cart price
  useEffect(()=>{
    const cal_price = cartData?.reduce(
      (acc, product) => (acc += product.price),
      0
    );
    setTotalPrice(cal_price);

    // console.log("price rendered now!!")
  },[cartData,totalPrice])

  if (loading) {
    <Container>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
        alt="laoding_cart"
      />
    </Container>;
  }
  return (
    <Box mb={'5rem'}>
      {cartData.length === 0 ? (
        <Container h="50vh" mb={'50px'}>
          <Text m={'5em'} as="b" textTransform={'uppercase'} textAlign='center' fontSize={'20px'}>Your Bag is empty  !!</Text>
          <Box align={'center'} m={4}> <BiShoppingBag size={'12em'} color="black" /></Box>
          
          <HStack spacing={3}>
            <Button backgroundColor="black"
           borderRadius="0"
           color="white"
           type="submit"
           onClick={()=>{naviagte("/menswear")}} >Shop MensWear</Button>
            <Button backgroundColor="black"
           borderRadius="0"
           color="white"
           type="submit"
           onClick={()=>{naviagte("/womenswear")}} >Shop WomensWear</Button>
            <Button backgroundColor="black"
           borderRadius="0"
           color="white"
           type="submit"
           onClick={()=>{naviagte("/sale")}} >Shop Sale</Button>
          </HStack>
        </Container>
      ) : (
        <HStack pl={"10rem"} spacing={'10rem'}>
        <Box>
          <TableContainer
            
            // variant='simple'
            borderBottom={'1px solid black'}
            maxHeight={'800px'}
            overflowY="scroll"
            sx={{
              '&::-webkit-scrollbar': {
                width: '10px',
                borderRadius: '5px',
                backgroundColor: `white`,
              },
              '&::-webkit-scrollbar-button': {
                height:"20px",

              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: `blackAlpha.800`,
                borderRadius: '5px',
              },
            }}
            alignSelf={'left'}
            m={4}
            ml={10}
          >
            <Table  >
            <TableCaption placement='top' textAlign={'left'} >Shopping Bag</TableCaption>
              <Thead >
                <Tr >
                  <Th></Th>
                  <Th>
                  <Text fontSize={'12px'}  fontWeight="600" textAlign={'left'}>Item</Text>
                  </Th>
                  <Th>
                  <Text fontSize={'12px'}  fontWeight="600" textAlign={'right'}>Price</Text>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {cartData?.map(item => (
                  <Tr key={item.id}>
                    <Td>
                      <Image
                        w="100px"
                        m="auto"
                        src={item.itemImg}
                        alt={item.title}
                      />
                    </Td>
                    <Td textAlign={'left'}>
                      <Text>{item.title}</Text>
                      <Text>{item.des}</Text>
                    </Td>
                    <Td>
                      <VStack>
                        {' '}
                        <Text>₹ {item.price}</Text>
                        <Button
                          leftIcon={<RiDeleteBin6Line color="black" />}
                          color="black"
                          variant="link"
                          onClick={() => deleteProduct(item.id)}
                        >
                          {' '}
                          Remove
                        </Button>
                      </VStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
             
            </Table>
          </TableContainer>
          <TableContainer pr={5}>
            <Table>
              <Tfoot boxShadow={'none'}> 
                <Tr>
                  <Td w="200px">{" "}</Td>
                  <Td >
                    <Text fontSize={'12px'}  fontWeight="400" textAlign={'left'}>Total</Text>
                  <Text fontSize={'12px'} textAlign={'left'}>Shopping estimate</Text>
                  <Text fontSize={'15px'} fontWeight="700" textAlign={'left'}> Order Total</Text>
                    </Td>
                  <Td >
                    <Text fontSize={'12px'}  fontWeight="400" textAlign={'right'}> ₹ {totalPrice}</Text>
                  <Text fontSize={'12px'} textAlign={'right'}>Calulated at Checkcout</Text>
                  <Text fontSize={'15px'} fontWeight="700" textAlign={'right'}>₹ {totalPrice}</Text>
                    </Td>
                </Tr>
               
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
        <Box mt={0} position={'relative'} top={"10px"} right={"10rem"} border={'1px solid'} >
          <Text>Logged In as</Text>
          <Text>Email</Text>
          <Text>{" "}</Text>
          <Button 
           mt={4}
           backgroundColor="black"
           borderRadius="0"
           color="white"
           type="submit"
           onClick={()=>{}}
          > Proceed to Checkout</Button>
        </Box>
        </HStack>
      )}
    </Box>
  );
}

export default ShoppingBag;
