import { Box, Image, Stack, Text } from '@chakra-ui/react'

import React from 'react'

const HomeBottom = () => {
  return (
    <Stack padding="1rem" direction={['column','row']} gap="8vh" m='auto'>
      
      <Box w={{base:"90%",sm:"95%",md:"30%",lg:"32%"}} m='auto'>
        <Box>
          <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1656427509/kvdzdh9kvqywamz8jfvc.jpg" />
        </Box>
        <Box>
          <div style={{ display: 'flex' }}>
            <Box
                padding= '10px'
                fontSize={{ base: '8px', sm: '8px', md: '10px', lg: '11px' }}
                textTransform= 'uppercase'
            >
              Recent
            </Box>
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
              Living the Anna Sui Fantasy
            </Text>
          </div>
          <Box
              fontSize={{base:"10px",sm:"10px",md:"12px",lg:"14px"}}
              lineHeight={{base:"14px",sm:"14px",md:"16px",lg:"18px"}}
              color= 'gray'
          >
            Fashion | Jun 28
          </Box>
        </Box>
      </Box>
      <Box w={{base:"90%",sm:"95%",md:"30%",lg:"32%"}} m='auto'>
        <Box>
          <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1655828088/doatgzikdfaadogtnvv1.jpg" />
        </Box>
        <Box>
          <div style={{ display: 'flex' }}>
            <Box
                padding= '10px'
                fontSize={{ base: '8px', sm: '8px', md: '10px', lg: '11px' }}
                textTransform= 'uppercase'
            >
              Recent
            </Box>
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
              Finding the Last Love Hotel
            </Box>
          </div>
          <Box
              fontSize={{base:"10px",sm:"10px",md:"12px",lg:"14px"}}
              lineHeight={{base:"14px",sm:"14px",md:"16px",lg:"18px"}}
              color= 'gray'
          >
            Culture | Jun 28
          </Box>
        </Box>
      </Box>
      <Box w={{base:"90%",sm:"95%",md:"30%",lg:"32%"}} m='auto'>
        <Box>
          <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1655820577/mvakse2eksisme4yhbt4.jpg" />
        </Box>
        <Box>
          <div style={{ display: 'flex' }}>
            <Box
                padding= '10px'
                fontSize={{ base: '8px', sm: '8px', md: '10px', lg: '11px' }}
                textTransform= 'uppercase'
            >
              Recent
            </Box>
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
              You’ve Got the Look
            </Box>
          </div>
          <Box
              fontSize={{base:"10px",sm:"10px",md:"12px",lg:"14px"}}
              lineHeight={{base:"14px",sm:"14px",md:"16px",lg:"18px"}}
              color= 'gray'
          >
            Fashion | Jun 23
          </Box>
        </Box>
      </Box>
  </Stack>
  )
}

export default HomeBottom
