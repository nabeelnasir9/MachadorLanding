import React from "react";
import "./Loader.css"; 

const Loader = () => {
  return (
    <div className="loader">
      <div className="loadertext" style={{ animationDelay: "2s" }}>
        WELCOME
      </div>
      <div className="loadertext" style={{ animationDelay: "4s" }}>
        WE ARE
      </div>
      <div className="loadertext" style={{ animationDelay: "6s" }}>
        MACHADOR
      </div>
      <div className="loadBarContainer" style={{ animationDelay: "8s" }}>
        <div className="loadBar"></div>
      </div>
    </div>
  );
};

export default Loader;
