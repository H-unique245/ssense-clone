import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import { textStyles } from './Styles/textStyles';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';

function App() {
  return (
    <ChakraProvider theme={textStyles}>
      <Navbar />
      <AllRoutes />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
