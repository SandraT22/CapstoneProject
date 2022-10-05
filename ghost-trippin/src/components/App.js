import React from "react";
import Header from "./Header";
import Maps from "./Maps";
import HauntedLocation from "./HauntedLocation";
import { ChakraProvider, theme } from '@chakra-ui/react';


function App(){
  return (
    <React.Fragment>
      <ChakraProvider theme={theme}>
      <Header />
      <HauntedLocation />
      <Maps />
      </ChakraProvider>
    </React.Fragment>
  );
}

export default App;
