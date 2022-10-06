import React from "react";
import Header from "./Header";
import Maps from "./Maps";
import HauntedLocation from "./HauntedLocation";
import { ChakraProvider, theme } from '@chakra-ui/react';
import SpookyRoad from '../img/SpookyRoad.jpg';
import '../App.css';


function App(){
  const mainStyle={
    backgroundImage: `url(${SpookyRoad})`,
    border: '2px solid black',
    display: 'flex',
    color: 'white'
  }
  const columnDisplay={
    columnCount: 2,
    columnGap: '460px'
  }
  return (
    <React.Fragment>
      <ChakraProvider theme={theme}>
      <Header />
      <div style={mainStyle}>
        <div style={columnDisplay}>
          <HauntedLocation />
        </div>
      </div>
      <Maps />
      </ChakraProvider>
    </React.Fragment>
  );
}

export default App;
