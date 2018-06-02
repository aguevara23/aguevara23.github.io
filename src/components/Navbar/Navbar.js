import React from "react";
import classes from "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => (
  <div className={classes.Navbar}>
    <ul className={classes.Menu}>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <Link to="/portfolio">Portfolio</Link>
    </ul>
  </div>
);

export default Navbar;
