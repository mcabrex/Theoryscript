import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1 className="title">
        <Link to="/">T H E O R Y</Link> - <Link to="/script">S C R I P T</Link>
      </h1>
    </div>
  );
};

export default Navbar;
