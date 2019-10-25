import React from 'react';
import classes from './Navbar.css';
import { NavLink } from 'react-router-dom';

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
    </ul>
  </div>
);

export default Navbar;
