import React from "react";
import classes from "./Navbar.css";
import { NavLink } from "react-router-dom";
import resume from "../../assets/AlexGuevara_Resume_2018.pdf";

const Navbar = () => (
  <div className={classes.Navbar}>
    <ul className={classes.Menu}>
      <NavLink activeClassName={classes.active} to="/" exact>
        Home
      </NavLink>
      <NavLink activeClassName={classes.active} to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink activeClassName={classes.active} to="/about/">
        About
      </NavLink>
      <a href={resume} target="_blank">
        Resume
      </a>
    </ul>
  </div>
);

export default Navbar;
