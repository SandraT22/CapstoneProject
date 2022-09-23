import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

export function FetchAPI() {
  const{ isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if(!isLoaded) return <div>Loading...</div>;
  return <div>Map</div>
}

export function Map() {
const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return ( <GoogleMap zoom={10} center={{let:44, lng:-80}} mapContainerClassName="map-container">
     <Marker position={{ lat: 44, lng: -80 }} />
  </GoogleMap>
  );
}

// function FetchAPI() {
//   const [data, setData] = useState([]);

// //Get Method
// const apiGet = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((json) => {
//       console.log("test", json);
//       setData(json);
//     });
// };

// return (
//   <div>
//     My API <br />
//     <button onClick={apiGet}>Fetch API</button>
//     <br />
//     <pre>{JSON.stringify(data, null, 2)}</pre>
//   </div>
// );
// }

// export default FetchAPI;