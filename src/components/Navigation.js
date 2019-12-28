import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Home from "./Home";
import Vitamin from "./Vitamin";

const Navigation = props => (
  <div id="myNav" className="overlay">
    <a className="closebtn" onClick={() => props.closeNav()}>
      &times;
    </a>
    <div className="overlay-content">
      <Link to="/" onClick={() => props.closeNav()}>
        Home
      </Link>
      <Link to="/vitamin" onClick={() => props.closeNav()}>
        Vitamin
      </Link>
    </div>
  </div>
);

export default Navigation;
