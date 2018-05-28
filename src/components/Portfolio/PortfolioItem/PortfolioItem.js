import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./PortfolioItem.css";

class PortfolioItem extends Component {
  state = {};
  render() {
    return (
      <Link to={this.props.path} className={classes.PortfolioItem}>
        <div>
          <h1>{this.props.title}</h1>
        </div>
      </Link>
    );
  }
}

export default PortfolioItem;
