import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';
import Banner from '../Components/Home/Banner';
import BannerBox from '../Components/Home/BannerBox';
import HomeBottom from '../Components/Home/HomeBottom';
import HomeBottomFooter from '../Components/Home/HomeBottomFooter';
import HomeBottomShop from '../Components/Home/HomeBottomShop';
import MensHome from '../Components/Home/MensHome';
import WomensHome from '../Components/Home/WomensHome';

function Homepage() {
  return (
    <>
      <Box height="auto" mb="10vh">
        {/* top two item box */}
        <Banner />

        <hr></hr>
        {/* top three item box */}
        <BannerBox />

        {/* {two boxes mens*  with BUtton} */}
        <MensHome />

        {/* {two boxes mens*  with BUtton} */}
        <WomensHome />

        <Box display="flex" justifyContent="center" m="1rem">
          {' '}
          <Text
            as="h1"
            fontSize={{ base: '50px', sm: '52px', md: '63px', lg: '71px' }}
            textAlign="center"
            w={{ base: '90%', sm: '95%', md: '75%' }}
            textTransform="uppercase"
          >
            Made in Vain: A Taxonomy of Eye-Opening Beauty Design
          </Text>
        </Box>
        <Box display="flex" justifyContent="center" m="1rem">
          {' '}
          <Text
            as="h2"
            fontSize={{ base: '40px', sm: '42px', md: '48px', lg: '53px' }}
            textAlign="center"
            w="95%"
          >
            From Falsies to Full-Coverage Enhancers, These Products Live Beyond
            Their Application
          </Text>
        </Box>
        <Box display="flex" justifyContent="center" m="1rem">
          <Button variant="outline"> VIEW EDITORIAL</Button>
        </Box>

        {/* bottom3 */}
        <HomeBottom />
        {/* bottpm 2 */}
        <HomeBottomShop />

        {/* Bottom three item box */}
        <HomeBottomFooter />

        {/* <>End of Homepage</> */}
      </Box>
    </>
  );
}

export default Homepage;
