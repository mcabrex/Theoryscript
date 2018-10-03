import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-text">
        <Link to="/">T H E O R Y</Link> - <Link to="/script">S C R I P T</Link>
      </h1>
    </div>
  );
};

export default Navbar;
