import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/histogram">Histogram</Link>
        <Link to="/piechart">Pie Chart</Link>
        <Link to="/familytree">Family Tree</Link>
      </div>
    </div>
  );
};

export default Navbar;
