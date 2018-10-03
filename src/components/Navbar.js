import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-text">
        <Link to="/" className="navbar-text-link">T H E O R Y</Link>{" "}<Link to="/script" className="navbar-text-link">S C R I P T</Link>
      </h1>
    </div>
  );
};

export default Navbar;
