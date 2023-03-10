import { Box, Button, Image, Stack } from '@chakra-ui/react'

import React from 'react'

const MensHome = () => {
  return (
    <Stack>
          <Box m="2%" padding="1rem" display="flex" gap="8vh">
            <Box w="50%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658150202/st2b4kpcidbuymyne5q6.jpg" />
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
                    addidas original
                  </p>
                </div>
                <div style={{ fontSize: '20px', lineHeight: '26px' }}>
                  <Button variant="outline"> SHOP MENSWEAR</Button>
                </div>
              </Box>
            </Box>
            <Box w="50%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658150220/zdwad3rpmvd1yucrbzo6.jpg" />
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
                    addidas original{' '}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '20px',
                    lineHeight: '26px',
                    textTransform: 'uppercase',
                  }}
                >
                  <Button variant="outline"> SHOP MENSWEAR</Button>{' '}
                </div>
              </Box>
            </Box>
          </Box>
        </Stack>
  )
}

export default MensHome
