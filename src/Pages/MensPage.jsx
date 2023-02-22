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

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://server-ssense-clone.onrender.com/mensData')
      .then(res => {
        // console.log("data",res.data)
        setLoading(false);
        setData(res.data);
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
            data.map(el => {
              /* console.log(el) */
              return (
                <Skeleton isLoaded={!loading} key={el.item_id}>
                  <GridItem key={el.item_id} h={'350px'} boxShadow={'md'}>
                    <Link to={el.item_id}>
                      <Box>
                        <Box h="70%">
                          <Image
                            mw="100%"
                            h="280px"
                            m="auto"
                            src={el.item_img}
                          />
                        </Box>
                        <Box
                          justifyItems="center"
                          textAlign="left"
                          fontSize="11px"
                          fontFamily="Arial,Sans-Serif"
                          m="5px"
                        >
                          <Text as="p">{el.item_design}</Text>
                          <Text as="p">{el.item_desc}</Text>
                          <Text as="p"> {el.iten_price} </Text>
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

export default MensPage;
