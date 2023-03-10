import { Box, Image, Stack } from '@chakra-ui/react'

import React from 'react'


const BannerBox = () => {
  return (
    <Stack>
          <Box m="2%" padding="1rem" display="flex" gap="8vh">
            <Box w="32%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1657724273/a7zbukc9wafrdnxjebgc.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '10px', fontSize: '11px' }}>
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
                    Test-Driving with Gogo Graham
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
                  Fashion | Jul 15
                </div>
              </Box>
            </Box>
            <Box w="32%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1655131638/urk0fprqhpz1n38of06f.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '10px', fontSize: '11px' }}>
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
                    Quiet Exuberance: Wales Bonner x Adidas SS22
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
                  Fashion | Jul 15
                </div>
              </Box>
            </Box>
            <Box w="32%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1657574887/aapqvs6xhmiziwsusnpy.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '10px', fontSize: '11px' }}>
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
                    (Fashion) Industry Plants
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
                  Fashion | Jul 15
                </div>
              </Box>
            </Box>
          </Box>
        </Stack>
  )
}

export default BannerBox
