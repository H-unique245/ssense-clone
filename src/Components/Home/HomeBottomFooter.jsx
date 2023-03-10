import { Box, Image, Stack, Text } from '@chakra-ui/react';

import React from 'react';

const HomeBottomFooter = () => {
  return (
    <Stack>
      <Box m="2%" padding="1rem" display="flex" gap="8vh">
        <Box w="32%">
          <Box>
            <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1655745694/f4dxlcxg7vmes9gwcqsq.jpg" />
          </Box>
          <Box>
            <div style={{ display: 'flex' }}>
              <Box
                padding="10px"
                fontSize={{ base: '8px', sm: '8px', md: '10px', lg: '11px' }}
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
                textTransform="uppercase"
              >
                Off to the Races: EVERYTHING ELSE™ Launches Cycling
              </Text>
            </div>
            <Box fontSize="14px" lineHeight="18px" color="gray">
              Market | Jun 22
            </Box>
          </Box>
        </Box>
        <Box w="32%">
          <Box>
            <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1655300180/w7k1a3vsq9llf5uxmavw.jpg" />
          </Box>
          <Box>
            <div style={{ display: 'flex' }}>
              <Box
                padding="10px"
                fontSize={{ base: '8px', sm: '8px', md: '10px', lg: '11px' }}
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
                textTransform="uppercase"
              >
                Fear of God Essentials
              </Box>
            </div>
            <Box fontSize="14px" lineHeight="18px" color="gray">
              Market | Jun 17
            </Box>
          </Box>
        </Box>
        <Box w="32%">
          <Box>
            <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1654699821/di3hkg7jamutgcrph7g7.jpg" />
          </Box>
          <Box>
            <div style={{ display: 'flex' }}>
              <Box
                padding="10px"
                fontSize={{ base: '8px', sm: '8px', md: '10px', lg: '11px' }}
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
                textTransform="uppercase"
              >
                Fame Is Fleeting, Celebrity Memoirs Are Forever
              </Box>
            </div>
            <Box fontSize="14px" lineHeight="18px" color="gray">
              Culture | Jun 13
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default HomeBottomFooter;
