import { Box, Flex, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  const linkText = [
    {
      id: 1,
      title: 'COUNTRY/REGION: INDIA',
      to: '/',
    },
    {
      id: 2,
      title: 'NEWSLETTER SIGNUP',
      to: '/',
    },
    {
      id: 3,
      title: 'CUSTOMER CARE',
      to: '/',
    },
    {
      id: 4,
      title: 'LOCATION',
      to: '/',
    },
    {
      id: 5,
      title: 'EDITORIAL ARCHIVE',
      to: '/',
    },
    {
      id: 6,
      title: 'CAREERS',
      to: '/',
    },
    {
      id: 7,
      title: 'AFFLIATES',
      to: '/',
    },
    {
      id: 8,
      title: 'SITEMAP',
      to: '/',
    },
  ];

  const SocialIcons = [
    {
      id: 1,
      icon: <FaFacebookF />,
      to: 'https://www.facebook.com/SSENSEofficial',
    },
    {
      id: 2,
      icon: <FaTwitter />,
      to: 'https://twitter.com/ssense',
    },
    {
      id: 3,
      icon: <FaInstagram />,
      to: 'https://instagram.com/ssense',
    },
    {
      id: 4,
      icon: <FaYoutube />,
      to: 'https://www.youtube.com/user/ssense',
    },
  ];

  const bottemLinks = [
    {
      id: 1,
      title: '@2022ssense.com',
      to: '/',
    },
    {
      id: 2,
      title: 'Terms & Conditions',
      to: '/',
    },

    {
      id: 3,
      title: 'Privacy Policy',
      to: '/',
    },
    {
      id: 4,
      title: 'Cookies',
      to: '/',
    },
    {
      id: 5,
      title: 'Accessibility',
      to: '/',
    },
  ];

  return (
    <Stack w="80%" m="auto">
      <Flex>
        <Box
          display="flex"
          flexWrap={'wrap'}
          fontSize="12px"
          color="#000000"
          lineHeight="18px"
          fontWeight="400"
        >
          {linkText.map(item => (
            <Box key={item.id} margin="10px">
              <Link to={item.to}>{item.title}</Link>
            </Box>
          ))}
        </Box>
        <HStack>
          {SocialIcons.map(elem => (
            <Box key={elem.id} width="2rem">
              {elem.icon}
            </Box>
            // console.log(elem.icon)
          ))}
        </HStack>
      </Flex>
      <Flex>
        <HStack
          color="#808080"
          width="60%"
          margin="auto"
          fontSize="12px"
          lineHeight="18px"
        >
          {bottemLinks.map(elem => (
            <Box key={elem.id}>
              {' '}
              <Link to="./"> {elem.title} </Link>
            </Box>
          ))}
        </HStack>
      </Flex>
    </Stack>
  );
}

export default Footer;
