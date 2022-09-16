import React from "react";
import FetchAPI from "./Control";

function Header() {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <button onClick={FetchAPI}>Update Ticket</button>
    </React.Fragment>
  );
}

export default Header;