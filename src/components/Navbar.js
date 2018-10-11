import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-text">
        <Link to="/" className="navbar-text-link">T H E O R Y</Link>
        {" "}
        <Link to="/script" className="navbar-text-link">S C R I P T</Link>
      </div>
    </div>
  );
};

export default Navbar;
