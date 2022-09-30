import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Box, Button, ButtonGroup, Flex, HStack, IconButton, Input, SkeletonText, Text } from '@chakra-ui/react';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';


const center = { lat: 44, lng: -80 }

export function FetchAPI() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: '',
    // process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // ...otherOptions
  })

  const {map, setMap} = useState(null)

  if (!isLoaded) {
    return <SkeletonText />
  }
    return (
    <Flex
      position='relative'
      flexdirection='column'
      alignItems='center'
      h='100vh'
      w='100vw'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerClassName="map-container"
          onLoad={(map) => setMap(map)}
        >
          {
          <Marker position={center} />
          }
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgcolor='white'
        shadow='base'
        minW='container.md'
        zIndez='modal'
      >
        <HStack spacing={4}>
          <Input type='text' placeholder='Origin' />
          <Input type='text' placeholder='Destination' />
          <ButtonGroup>
            <Button colorScheme='pink' type='submit'>
              Calculate Route
            </Button>
            <IconButton
            aria-label='center back'
            icon={<FaTimes />}
            onClick={() => alert(123)}
            />
          </ButtonGroup>
        </HStack>
        <HStack>
          <Text>Distance: </Text>
          <Text>Duration: </Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => alert(123)}
          />
        </HStack>
      </Box>
    </Flex>
    )
  }

