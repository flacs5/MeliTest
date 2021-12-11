import React from "react";
import SearchBar from "./SearchBar";
import logoML from "../img/logo_ml.png";

const Topbar: React.FC = () => {
  return (
    <div className="topbar_wrapper">
      <div className="container">
        <div className="topbar">
          <img className="topbar__logo" src={logoML} alt="Mercado Libre" />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
