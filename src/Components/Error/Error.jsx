import React from "react";
import { errorSytle } from "./ErrorStyle";

const Error = ({ error }) => {
  return <>{error && <p style={errorSytle}>{error}</p>}</>;
};

export default Error;
