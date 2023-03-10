import { Box, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Banner = () => {
  return (
    <Stack>
      <Box m="2%" padding="1rem" display="flex" gap="8vh">
        <Box w="50%">
          <Box>
            <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658237092/l06ie9510jtzzz2rif8k.jpg" />
          </Box>
          <Box>
            <div style={{ display: 'flex' }}>
              <Text padding="10px" fontSize={{base:"8px",sm:"8px",md:"10px",lg:"11px"}}>
                Culture
              </Text>
              <Text
                as="p"
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
                SMALL REVOLUTIONS WITH JOSHUA P. MATTHEWS
              </Text>
            </div>
            <Box fontSize={{base:'14px',sm:'14px',md:'18px',lg:'20px'}} lineHeight={{base:'19px',sm:'20px',md:'23px',lg:'26px'}}>
              {' '}
              The NY-based cyclist and author of HARD-SHELL® speaks to Sydney
              Allen-Ash about riding and archiving.
            </Box>
          </Box>
        </Box>
        <Box w="50%">
          <Box>
            <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658263193/azvvibhaf1pig0yxqayw.jpg" />
          </Box>
          <Box>
            <div style={{ display: 'flex' }}>
              <Box padding="10px" fontSize={{base:"8px",sm:"8px",md:"10px",lg:"11px"}}>
                Market
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
                Tripping Out
              </Box>
            </div>
            <Box fontSize={{base:'14px',sm:'14px',md:'18px',lg:'20px'}} lineHeight={{base:'19px',sm:'20px',md:'23px',lg:'26px'}}>
              {' '}
              Take a Trip with The Row, D.S. and Durga, and Eytys.
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Banner;
