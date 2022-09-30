import React from "react";
import GtLogo from '../img/GtLogo.jpg';
import NaviBar from "./NavBar";

function Header() {
  return (
    <React.Fragment>
      <img src={ GtLogo } alt="Logo of car with dotted train making the picture of a ghost."></img>
      <NaviBar />
    </React.Fragment>
  );
}

export default Header;