import React from "react";
import GtLogo from '../img/GtLogo.jpg';
import NaviBar from "./NavBar";

function Header() {
  const columnNavi={
    columnCount: 3,
    columnGap: '390px',
    fontSize: '1.5rem'
  }
  const pageName={
    fontSize: '3rem'
  }
  return (
    <React.Fragment>
      <div style={columnNavi}>
        <img src={ GtLogo } alt="Logo of car with dotted train making the picture of a ghost."></img>
        <div style={pageName}>
          <h1>GhostTrippin, USA</h1>
        </div>
        <br></br>
        <NaviBar />
      </div>
    </React.Fragment>
  );
}

export default Header;