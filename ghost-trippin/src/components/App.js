import React from "react";
import Header from "./Header";
import Maps from "./Maps";
import { ChakraProvider, theme } from '@chakra-ui/react';


function App(){
  return (
    <React.Fragment>
      <ChakraProvider theme={theme}>
      <Header />
      <Maps />
      </ChakraProvider>
    </React.Fragment>
  );
}

export default App;
