import { Box, Image, Stack } from '@chakra-ui/react'

import React from 'react'

const HomeBottom = () => {
  return (
    <Stack>
    <Box m="2%" padding="1rem" display="flex" gap="8vh">
      <Box w="32%">
        <Box>
          <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1656427509/kvdzdh9kvqywamz8jfvc.jpg" />
        </Box>
        <Box>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                padding: '10px',
                fontSize: '11px',
                textTransform: 'uppercase',
              }}
            >
              Recent
            </div>
            <p
              style={{
                fontSize: '19px',
                lineHeight: '26px',
                textTransform: 'uppercase',
              }}
            >
              {' '}
              Living the Anna Sui Fantasy
            </p>
          </div>
          <div
            style={{
              fontSize: '14px',
              lineHeight: '18px',
              color: 'gray',
            }}
          >
            {' '}
            Fashion | Jun 28
          </div>
        </Box>
      </Box>
      <Box w="32%">
        <Box>
          <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1655828088/doatgzikdfaadogtnvv1.jpg" />
        </Box>
        <Box>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                padding: '10px',
                fontSize: '11px',
                textTransform: 'uppercase',
              }}
            >
              Recent
            </div>
            <div
              style={{
                fontSize: '19px',
                lineHeight: '26px',
                textTransform: 'uppercase',
              }}
            >
              {' '}
              Finding the Last Love Hotel
            </div>
          </div>
          <div
            style={{
              fontSize: '14px',
              lineHeight: '18px',
              color: 'gray',
            }}
          >
            {' '}
            Culture | Jun 28
          </div>
        </Box>
      </Box>
      <Box w="32%">
        <Box>
          <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1655820577/mvakse2eksisme4yhbt4.jpg" />
        </Box>
        <Box>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                padding: '10px',
                fontSize: '11px',
                textTransform: 'uppercase',
              }}
            >
              Recent
            </div>
            <div
              style={{
                fontSize: '19px',
                lineHeight: '26px',
                textTransform: 'uppercase',
              }}
            >
              {' '}
              You’ve Got the Look
            </div>
          </div>
          <div
            style={{
              fontSize: '14px',
              lineHeight: '18px',
              color: 'gray',
            }}
          >
            {' '}
            Fashion | Jun 23
          </div>
        </Box>
      </Box>
    </Box>
  </Stack>
  )
}

export default HomeBottom
