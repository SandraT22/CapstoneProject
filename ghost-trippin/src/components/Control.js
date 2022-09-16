import React, { useState, useEffect } from "react";

function FetchAPI() {
  const [data, setData] = useState([]);

//Get Method
const apiGet = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setData(json);
    });
};

return (
  <div>
    My API <br />
    <button onClick={apiGet}>Fetch API</button>
    <br />
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);
}

export default FetchAPI;