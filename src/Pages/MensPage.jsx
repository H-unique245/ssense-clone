import {
  Box,
  Grid,
  GridItem,
  Image,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../Components/Filter';
import Sorting from '../Components/Sorting';

function MensPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchProductData=async()=>{
    setLoading(true);
      try{
        let res= await axios.get('https://server-ssense-clone.onrender.com/mensData');
         setLoading(false);
         setData(res.data);
      } 
      catch(err){
        setLoading(false);
            console.log(err)
      }

  }
  useEffect(() => {
      fetchProductData();
  }, []);
  if(loading) {
  <Box>
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="loading" />
                </Box>

  } 
  return (
    <>
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        pb="20px"
      >
        <Box
          display={{ base: 'none', sm: 'none', md: 'block' }}
          h="auto"
          w="12%"
          p="10px"
        >
          <Filter />
        </Box>
        <Grid
          h="auto"
          w="70%"
          p={[2]}
          templateColumns={{
            base: 'repeat(2, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          templateRows="auto"
          gap={5}
        >
          {
              
            data?.map(el => {
              /* console.log(el) */
              return (
                  <GridItem key={el.id} h={'350px'} boxShadow={'md'}>
                    <Link to={el.id}>
                      <Box>
                        <Box h="70%">
                          <Image
                            mw="100%"
                            h="280px"
                            m="auto"
                            src={el.itemImg}
                          />
                        </Box>
                        <Box
                          justifyItems="center"
                          textAlign="left"
                          fontSize="11px"
                          fontFamily="Arial,Sans-Serif"
                          m="5px"
                        >
                          <Text as="p">{el.title}</Text>
                          <Text as="p">{el.des}</Text>
                          <Text as="p"> {el.price} </Text>
                        </Box>
                      </Box>
                    </Link>
                  </GridItem>
              );
            })
          }
        </Grid>
        <Box
          display={{ base: 'none', sm: 'none', md: 'block' }}
          h="500px"
          w="12%"
          p={[1]}
        >
          {' '}
          <Sorting />{' '}
        </Box>
      </Stack>
    </>
  );
}

export default MensPage;
