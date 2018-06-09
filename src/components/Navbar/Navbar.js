import React from "react";
import classes from "./Navbar.css";
import { Link } from "react-router-dom";
import resume from "../../assets/AlexGuevara_Resume_2018.pdf";

const Navbar = () => (
  <div className={classes.Navbar}>
    <ul className={classes.Menu}>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/about/">About</Link>
      <a href={resume} target="_blank">
        Resume
      </a>
    </ul>
  </div>
);

export default Navbar;
