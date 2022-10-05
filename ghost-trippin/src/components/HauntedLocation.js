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
          console.log(jsonifiedResponse);
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
            {hauntedLocations.map((locations, index) =>
              <li key={index}>
                <h3>{locations.name}</h3>
                <p>{locations.address}</p>
                <p>{locations.description}</p>
                <p>{locations.link}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
}

export default HauntedLocation;