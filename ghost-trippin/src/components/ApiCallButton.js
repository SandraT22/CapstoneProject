import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { Box, Button, ButtonGroup, Flex, HStack, IconButton, Input, SkeletonText, Text } from '@chakra-ui/react';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';


const center = { lat: 44, lng: -80 }

export function FetchAPI() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: '',
    libraries: ['places'],
    // process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // ...otherOptions
  })

  const [map, setMap] = useState(/**@type google.maps.map */null)

  if (!isLoaded) {
    return 'Error';
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
          options={{ zoomControl: false, streetViewControl: false, mapTypeControl: false, fullscreenControl: false }}
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
        zIndex='modal'
      >
        <HStack spacing={4}>
          <Autocomplete>
            <Input type='text' placeholder='Origin' />
          </Autocomplete>
          <Autocomplete>
            <Input type='text' placeholder='Destination' />
          </Autocomplete>
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
            onClick={() => map.panTo(center)}
          />
        </HStack>
      </Box>
    </Flex>
    )
  }

