import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";


const center = { lat: 44, lng: -80 }

export function FetchAPI() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: '',
    // process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
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

