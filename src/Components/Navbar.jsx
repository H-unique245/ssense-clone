import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Flex
    display={{base:"none",sm:"none",md:"flex"}}
      textTransform="uppercase"
      fontFamily="arial"
      justifyContent="space-around"
      fontSize={{base:"10px",md:"10px",lg:"12px"}}
    >
      <Box display="flex" justifyContent="space-around">
        <Box margin="10px" _hover={{ textDecoration: 'underline' }}>
          <Link to="/menswear">MensWear</Link>
        </Box>
        <Box margin="10px" _hover={{ textDecoration: 'underline' }}>
          {' '}
          <Link to="/womenswear">WomensWear</Link>
        </Box>
        <Box margin="10px" _hover={{ textDecoration: 'underline' }}>
          {' '}
          <Link to="/everything-else">EveryThing Else</Link>
        </Box>
        <Box margin="10px" _hover={{ textDecoration: 'underline' }}>
          {' '}
          <Link to="/sale">Sale</Link>
        </Box>
        <Box margin="10px" _hover={{ textDecoration: 'underline' }}>
          {' '}
          <Link to="/#">Search</Link>
        </Box>
      </Box>
      <Box>
        <Link to="/">
          <Box mt="0" p="0">
            <Image
              m="auto"
              mt={{base:"-1.5vh",md:"-1.2vh",lg:"-4vh"}}
              p="0"
              h="auto"
              w={{base:"6rem",md:"4rem",lg:"8rem"}}
              src="data:image/png;base64,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"
            />
          </Box>
        </Link>
      </Box>
      <Box display="flex" justifyContent="space-around">
        <Box margin="10px">
          ENGLISH
        </Box>
        <Box margin="10px" _hover={{ textDecoration: 'underline' }}>
          <Link to="/login">LOGIN</Link>
        </Box>
        <Box margin="10px" _hover={{ textDecoration: 'underline' }}>
          <Link to="/">WISHLIST</Link>
        </Box>
        <Box margin="10px" _hover={{ textDecoration: 'underline' }}>
          <Link to="/checkout" className="link">
            SHOPPING BAG
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Navbar;
