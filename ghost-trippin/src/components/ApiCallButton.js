import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";


const center = { lat: 44, lng: -80 }

export function FetchAPI() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBkztmHf4V3Cmp1DkblMgMoSDNZ3Imv5RU',
    // ...otherOptions
  })

  if (!isLoaded) {
    return <skeletonText />
  }
    return <GoogleMap
      center={center}
      zoom={15}
      mapContainerClassName="map-container"
    >
      {
        // ...Your map components
      }
    </GoogleMap>
  }

