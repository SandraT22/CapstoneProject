import React, { useState, useEffect } from 'react';

function HauntedLocation() {
  const title={
    display: 'flex',
    color: 'white',
    fontSize: '3rem',
  }
  const textBackground={
    color: 'white',
    background: 'rgba(1, 1, 1, 10)',
    opacity: 0.5
  }
  const names={
    color: 'white',
    fontSize: '1.4rem', 
    padding: '8px'
  }

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
          <div style={title}>
            <h1>Haunted Locations</h1>
          </div>
          <div style={textBackground}>
            <ul>
              {hauntedLocations.map((locations) =>
                <li key={locations.LocationId}>
                  <div style={names}>
                    <h3>{locations.Name}</h3>
                  </div>
                  <p>{locations.Address}</p>
                  <p>{locations.Description}</p> 
                  <a href={locations.Link} target='_blank' rel='noreferrer'>Location Link</a>
                </li>
              )}
            </ul>
          </div>
        </React.Fragment>
      );
    }
}

export default HauntedLocation;