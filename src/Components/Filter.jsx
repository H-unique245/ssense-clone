import { Box, Checkbox, Heading, Link, Stack, VStack } from '@chakra-ui/react';
import React from 'react';

function Filter() {
  const Filt_data = {
    Categories: ['ACCESSORIES', 'BAGS', 'CLOTHING', 'SHOES'],
    Designers: [
      '032c',
      '1017 ALYX 9SM',
      '11 by Boris Bidjan Saberi',
      '132 5. ISSEY MIYAKE',
      '3.1 Phillip Lim',
      '3MAN',
      '424',
      '44 Label Group',
      '4SDESIGNS',
      '99% IS',
      'A BETTER FEELING',
      'A PERSONAL NOTE 73',
      'A-COLD-WALL*',
      'A. A. Spectrum',
      'A.P.C.',
      'AAPE by A Bathing Ape',
      'Acne Studios',
      'ACRONYM',
      'ADER error',
      'adidas Originals',
      'adidas x Human Made',
      'adidas x Humanrace by Pharrell Williams',
      'Adieu',
      'ADISH',
      'Advisory Board Crystals',
      'ADYAR',
      'ænrmòus',
      'AFFXWRKS',
      'Afield Out',
      'Agnona',
      'AGR',
      'Ahluwalia',
      'Ahluwalia &PaulSmith',
      'AïE',
      'AIREI',
      'Aitor Throup’s TheDSA',
      'Akoni',
      'Alan Crocetti',
      'Alchemist',
      'Alexander McQueen',
      'Alighieri',
      'AMBUSH',
      'AMI Alexandre Mattiussi',
      'AMIRI',
      'AMOMENTO',
      'and wander',
      'Andersson Bell',
      'ANDREĀDAMO',
      'Ann Demeulemeester',
      'Another Aspect',
      'APPLIED ART FORMS',
      'Aries',
      'Arnar Már Jónsson',
      'ARTURO OBEGERO',
      'Ashley Williams',
      'Asics',
      'ASPESI',
      'AURALEE',
      'Awake NY',
      'Axel Arigato',
      'Aztech Mountain',
      'Balenciaga',
      'Bally Hike',
      'Balmain',
      'Bao Bao Issey Miyake',
      'BAPE',
      'Barbour',
      'Barena',
      'Bather',
      'BEAMS PLUS',
      'BED J.W. FORD',
      'Belstaff',
      'Benjamin Edgar',
      'Bethany Williams',
      'Bianca Saunders',
      'Billionaire Boys Club',
      'Birkenstock',
      'Blackmerle',
      'Bless',
      'Bleue Burnham',
      'BLK DNM',
      'Bloke',
      'Bode',
      'BONNIE CLYDE',
      'Boramy Viguier',
      'Boris Bidjan Saberi',
      'Boss',
      'both',
      'Bottega Veneta',
      'Botter',
      'Brain Dead',
      'Brioni',
      'Brownstone',
      'Brunello Cucinelli',
      'BRYAN JIMENÈZ',
      'Burberry',
      'By Walid',
      'BYBORRE',
      'C.P. Company',
      'C2H4',
      'Calvin Klein Underwear',
      'CALVINLUO',
      'Camber USA',
      'Camiel Fortgens',
      'CamperLab',
      'Canada Goose',
      'Carhartt Work In Progress',
      'Carlota Barrera',
      'Carne Bollente',
      'CARSON WACH',
      'Cartier',
      'Casablanca',
      'Castañer',
      'CAYL',
      'CDLP',
      'CFCL',
      'Charles Jeffrey Loverboy',
      'Chemist Creations',
      'Chen Peng',
      'Chet Lo',
      'Children of the Discordance',
      'CHIMI',
      'Chin Teo',
      'Chopova Lowena',
      'Christian Lou',
    ],
  };
  return (
    <Stack
      justifyContent="center"
      pl="12px"
      textTransform="uppercase"
      fontSize="12px"
      fontFamily="Arial,Sans-Serif"
    >
      <Box fontSize="12px" mb="25px">
        <Checkbox type="blackAlpha">Sale Only</Checkbox>
      </Box>
      <VStack alignItems="flex-start" pl={[1]} fontWeight="400" pb="25px">
        <Heading as="h2" fontSize="14px" textDecoration="underline">
          {' '}
          All Categories
        </Heading>
        <Box flexDirection="column">
          {Filt_data.Categories.map(el => (
            <Box key={el} lineHeight="18px">
              <Link ml="0"> {el}</Link>
            </Box>
          ))}{' '}
        </Box>
      </VStack>
      <VStack alignItems="flex-start" pl={[1]} pb="20px">
        {' '}
        <Heading as="h2" fontSize="14px">
          {' '}
          All Designers
        </Heading>
        <Box flexDirection="column">
          {Filt_data.Designers.map(el => (
            <Box key={el} lineHeight="18px">
              <Link ml="0"> {el}</Link>
            </Box>
          ))}{' '}
        </Box>
      </VStack>
    </Stack>
  );
}

export default Filter;
