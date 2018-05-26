import React from "react";
import { Link } from "react-router-dom";

import classes from "./Home.css";

const home = () => (
  <div className={classes.Home}>
    <h1>Bits of Code</h1>
    <h4>By Alex Guevara</h4>
    <Link to="/portfolio" className={classes.Button}>
      View Projects
    </Link>
  </div>
);

export default home;
