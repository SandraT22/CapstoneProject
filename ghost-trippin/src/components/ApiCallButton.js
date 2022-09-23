import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import { useMemo } from "react";

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export function FetchAPI() {
  return (
    <LoadScript
      googleMapsApiKey="process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
//   const{ isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//   });

//   if(!isLoaded) return <div>Loading...</div>;
//   return <div>Map</div>
// }

// export function Map() {
// const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

//   return ( <GoogleMap zoom={10} center={{let:44, lng:-80}} mapContainerClassName="map-container">
//      <Marker position={{ lat: 44, lng: -80 }} />
//   </GoogleMap>
//   );
}


export default React.memo(MyComponent)

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