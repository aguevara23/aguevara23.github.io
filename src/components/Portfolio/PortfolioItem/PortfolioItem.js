import React, { Component } from "react";
import { Link } from "react-router-dom";

import Image from "../../../UI/Image/Image";
import Icon from "../../../UI/Icon/Icon";

import classes from "./PortfolioItem.css";

class PortfolioItem extends Component {
  render() {
    const loadIcons = () => {
      return this.props.tech.map((item, i) => {
        return <Icon name={item} key={`${item}${i}`} />;
      });
      // map through array of tech, render Icon with the appropriate name
    };

    return (
      <Link to={this.props.path}>
        <div className={classes.PortfolioItem}>
          <Image source={this.props.title} />
          <div className={classes.TextBlock}>
            <h1 className={classes.Title}>{this.props.title}</h1>
            <div className={classes.Icons}>{loadIcons()}</div>
          </div>
        </div>
      </Link>
    );
  }
}

export default PortfolioItem;
