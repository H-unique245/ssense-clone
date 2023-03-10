import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';

import React from 'react';

const HomeBottomShop = () => {
  return (
    <Stack>
      <Box m="2%" padding="1rem" display="flex" gap="8vh">
        <Box w="50%">
          <Box>
            <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658150264/smf4mzepaq855zmdegi1.jpg" />
          </Box>
          <Box>
            <div style={{ display: 'flex' }}>
              <Box
                padding="10px"
                fontSize={{ base: '9px', sm: '10px', md: '11px' }}
                color="gray"
              >
                Featured
              </Box>
              <Text
                fontSize={{ base: '13px', sm: '14px', md: '16px', lg: '19px' }}
                lineHeight={{
                  base: '18px',
                  sm: '19px',
                  md: '22px',
                  lg: '26px',
                }}
                textTransform="uppercase"
              >
                y-3
              </Text>
            </div>
            <Box
              fontSize={{ base: '14px', sm: '14px', md: '18px', lg: '20px' }}
              lineHeight={{
                base: '18px',
                sm: '19px',
                md: '22px',
                lg: '26px',
              }}
            >
              <Button variant="outline"> SHOP MENSWEAR</Button>
            </Box>
          </Box>
        </Box>
        <Box w="50%">
          <Box>
            <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658150277/hlaq5txh0gv05w9xyik7.jpg" />
          </Box>
          <Box>
            <div style={{ display: 'flex' }}>
              <Box
                padding="10px"
                fontSize={{ base: '9px', sm: '10px', md: '11px' }}
                color="gray"
              >
                Featured
              </Box>
              <Box
                fontSize={{ base: '13px', sm: '14px', md: '16px', lg: '19px' }}
                lineHeight={{
                  base: '18px',
                  sm: '19px',
                  md: '22px',
                  lg: '26px',
                }}
                textTransform="uppercase"
              >
                {' '}
                y-3
              </Box>
            </div>
            <Box
              fontSize={{ base: '14px', sm: '14px', md: '18px', lg: '20px' }}
              lineHeight={{
                base: '18px',
                sm: '19px',
                md: '22px',
                lg: '26px',
              }}
              textTransform="uppercase"
            >
              <Button variant="outline"> SHOP WOMENSWEAR</Button>{' '}
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default HomeBottomShop;
