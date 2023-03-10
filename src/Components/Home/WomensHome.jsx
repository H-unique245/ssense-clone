import { Box, Button, Image, Stack } from '@chakra-ui/react';

import React from 'react';

const WomensHome = () => {
  return (
    <Stack>
          <Box m="2%" padding="1rem" display="flex" gap="8vh">
            <Box w="50%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658150350/h0z9kdfv1koxbtetht2b.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{ padding: '10px', fontSize: '11px', color: 'gray' }}
                  >
                    Featured
                  </div>
                  <p
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    ss daley
                  </p>
                </div>
                <div style={{ fontSize: '20px', lineHeight: '26px' }}>
                  <Button variant="outline"> SHOP WOMENSWEAR</Button>
                </div>
              </Box>
            </Box>
            <Box w="50%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658150239/wogzonxxz0bbgc55puz6.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{ padding: '10px', fontSize: '11px', color: 'gray' }}
                  >
                    Featured
                  </div>
                  <div
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    bottega veneta{' '}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '20px',
                    lineHeight: '26px',
                    textTransform: 'uppercase',
                  }}
                >
                  <Button variant="outline"> SHOP WOMENSWEAR</Button>{' '}
                </div>
              </Box>
            </Box>
          </Box>
        </Stack>
  )
}

export default WomensHome
