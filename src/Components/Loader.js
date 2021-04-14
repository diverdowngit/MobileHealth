import React from "react";
import Logo from "./util/mhlogo.gif";

const Loader = () => {
  return (
    <h1>
      <div className="spinner" role="status">
        <img src={Logo} height="200rem" />
        <span className="sr-only">Loading...</span>
      </div>
    </h1>
  );
};

export default Loader;
