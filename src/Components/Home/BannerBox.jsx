import { Box, Image, Stack, Text } from '@chakra-ui/react';

import React from 'react';

const BannerBox = () => {
  return (
    <Stack padding="1rem" direction={['column','row']} gap="8vh" >
        <Box w={{base:"90%",sm:"95%",md:"30%",lg:"32%"}} m='auto'>
          <Box>
            <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1657724273/a7zbukc9wafrdnxjebgc.jpg" />
          </Box>
          <Box>
            <div style={{ display: 'flex' }}>
              <Box 
               padding= '10px'
               fontSize={{ base: '8px', sm: '8px', md: '10px', lg: '11px' }}
               >
                Recent</Box>
              <Text
                  fontSize={{ base: '13px', sm: '14px', md: '16px', lg: '19px' }}
                  lineHeight={{
                  base: '18px',
                  sm: '19px',
                  md: '22px',
                  lg: '26px',
                }}
                  textTransform= 'uppercase'
              >
                Test-Driving with Gogo Graham
              </Text>
            </div>
            <Box
                fontSize={{base:"10px",sm:"10px",md:"12px",lg:"14px"}}
                lineHeight={{base:"14px",sm:"14px",md:"16px",lg:"18px"}}
                color= 'gray'
            >
              Fashion | Jul 15
            </Box>
          </Box>
        </Box>
        <Box w={{base:"90%",sm:"95%",md:"30%",lg:"32%"}} m='auto'>
          <Box>
            <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1655131638/urk0fprqhpz1n38of06f.jpg" />
          </Box>
          <Box>
            <div style={{ display: 'flex' }}>
              <Box  padding= '10px' fontSize={{ base: '8px', sm: '8px', md: '10px', lg: '11px' }} >Recent</Box>
              <Box
                  fontSize={{ base: '13px', sm: '14px', md: '16px', lg: '19px' }}
                  lineHeight={{
                  base: '18px',
                  sm: '19px',
                  md: '22px',
                  lg: '26px',
                }}
                  textTransform= 'uppercase'
              >
                Quiet Exuberance: Wales Bonner x Adidas SS22
              </Box>
            </div>
            <Box
                fontSize={{base:"10px",sm:"10px",md:"12px",lg:"14px"}}
                lineHeight={{base:"14px",sm:"14px",md:"16px",lg:"18px"}}
                color= 'gray'
            >
              {' '}
              Fashion | Jul 15
            </Box>
          </Box>
        </Box>
        <Box w={{base:"90%",sm:"95%",md:"30%",lg:"32%"}} m='auto'>
          <Box>
            <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1657574887/aapqvs6xhmiziwsusnpy.jpg" />
          </Box>
          <Box>
            <div style={{ display: 'flex' }}>
              <Box  padding= '10px' fontSize={{ base: '8px', sm: '8px', md: '10px', lg: '11px' }} >Recent</Box>
              <Box
                  fontSize={{ base: '13px', sm: '14px', md: '16px', lg: '19px' }}
                  lineHeight={{
                  base: '18px',
                  sm: '19px',
                  md: '22px',
                  lg: '26px',
                }}
                  textTransform= 'uppercase'
              >
                (Fashion) Industry Plants
              </Box>
            </div>
            <Box
                fontSize={{base:"10px",sm:"10px",md:"12px",lg:"14px"}}
                lineHeight={{base:"14px",sm:"14px",md:"16px",lg:"18px"}}
                color= 'gray'
            >
              Fashion | Jul 15
            </Box>
          </Box>
        </Box>
    </Stack>
  );
};

export default BannerBox;
