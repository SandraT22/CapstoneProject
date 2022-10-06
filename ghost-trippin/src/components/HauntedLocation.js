import React, { useState, useEffect } from 'react';

function HauntedLocation() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hauntedLocations, setHauntedLocations] = useState([]);

  useEffect(() => {
   
    fetch(`http://localhost:5000/api/v1/Locations/All`)
        .then(response => {
          console.log(response);
          if(!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
          } else {
            return response.json()
          }
        })
        .then((jsonifiedResponse) => {
          setHauntedLocations(jsonifiedResponse)
          console.log("string", jsonifiedResponse);
          setIsLoaded(true)
        })
        .catch((error) => {
          setError(error.message)
          setIsLoaded(true)
        });
    }, []) 

    if (error) {
      return <h1>Error: {error}</h1>;
    } else if (!isLoaded) {
      return <h1>...Loading...</h1>;
    } else {
      return (
        <React.Fragment>
          <h1>Haunted Locations</h1>
          <ul>
            {hauntedLocations.map((locations) =>
              <li key={locations.LocationId}>
                <h3>{locations.Name}</h3>
                <p>{locations.Address}</p>
                <p>{locations.Description}</p>
                <p>{locations.Link}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
}

export default HauntedLocation;