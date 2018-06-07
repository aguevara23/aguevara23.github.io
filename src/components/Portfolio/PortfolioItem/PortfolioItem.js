import React, { Component } from "react";
import { Link } from "react-router-dom";

import Icon from "../../../UI/Icon/Icon";
import Wischen from "../../../assets/wischen.png";
import RealEstate from "../../../assets/realestate.png";
import InteriorDesign from "../../../assets/interiordesign.png";
import Splatter from "../../../assets/splatter.png";
import MilennialGoT from "../../../assets/MilennialGoT.png";
import Dribbble01 from "../../../assets/dribbble01.png";

import classes from "./PortfolioItem.css";

class PortfolioItem extends Component {
  render() {
    const loadImage = () => {
      switch (this.props.title) {
        case "Wischen":
          return <img className={classes.Image} src={Wischen} alt="test" />;
        case "Real Estate Website":
          return <img className={classes.Image} src={RealEstate} alt="test" />;
        case "Splatter":
          return <img className={classes.Image} src={Splatter} alt="test" />;
        case "Resume Booster":
          return (
            <img className={classes.Image} src={MilennialGoT} alt="test" />
          );
        case "Interior Design":
          return (
            <img className={classes.Image} src={InteriorDesign} alt="test" />
          );
        case "Dribbble 01":
          return <img className={classes.Image} src={Dribbble01} alt="test" />;
        default:
          return null;
      }
    };

    const loadIcons = () => {
      return this.props.tech.map((item, i) => {
        return <Icon name={item} key={`${item}${i}`} />;
      });
      // map through array of tech, render Icon with the appropriate name
    };

    return (
      <Link to={this.props.path}>
        <div className={classes.PortfolioItem}>
          {loadImage()}
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
