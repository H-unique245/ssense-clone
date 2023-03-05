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
  
  function WomensPage() {
    const [loading, setLoading] = useState(false);
    const [dataW, setDataW] = useState([]);
  
    useEffect(() => {
      setLoading(true);
      axios
        .get('https://server-ssense-clone.onrender.com/womensData')
        .then(res => {
          console.log("data",res.data)
          setLoading(false);
          setDataW(res.data);
        })
        .catch(err => console.log(err));
    }, []);
  
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
                  loading ? new Array(15).map(i=>{
                  return <Skeleton key={i+9} >
                    <GridItem  h={'350px'} boxShadow={'md'}>
                      <Box>
                        <Box h="70%">
                          <Image
                            mw="100%"
                            h="280px"
                            m="auto"
                            src={''}
                          />
                        </Box>
                        <Box
                          justifyItems="center"
                          textAlign="left"
                          fontSize="11px"
                          fontFamily="Arial,Sans-Serif"
                          m="5px"
                        >
                          <Text as="p">""</Text>
                          <Text as="p">""</Text>
                          <Text as="p">"" </Text>
                        </Box>
                      </Box>
                  </GridItem>
                </Skeleton>})
               :
              dataW.map(el => {
                /* console.log(el) */
                
                return (
                  <Skeleton isLoaded={!loading} key={el._id}>
                    <GridItem key={el._id} h={'350px'} boxShadow={'md'}>
                      <Link to={el._id}>
                        <Box>
                          <Box h="70%">
                            <Image
                              mw="100%"
                              h="280px"
                              m="auto"
                              src={el.img_url}
                            />
                          </Box>
                          <Box
                            justifyItems="center"
                            textAlign="left"
                            fontSize="11px"
                            fontFamily="Arial,Sans-Serif"
                            m="5px"
                          >
                            <Text as="p">{el.product}</Text>
                            <Text as="p">{el.pro_desc}</Text>
                            <Text as="p"> {el.price} </Text>
                          </Box>
                        </Box>
                      </Link>
                    </GridItem>
                  </Skeleton>
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
  
  export default WomensPage;
  