import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import { textStyles } from './Styles/textStyles';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <ChakraProvider theme={textStyles}>
      <Navbar />
      <AllRoutes />
    </ChakraProvider>
  );
}

export default App;
