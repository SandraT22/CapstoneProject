import React from "react";
import { FetchAPI, Map } from "./ApiCallButton";

function Maps() {
  return (
    <React.Fragment>
      <FetchAPI />
      <Map />
    </React.Fragment>
  );
}

export default Maps;