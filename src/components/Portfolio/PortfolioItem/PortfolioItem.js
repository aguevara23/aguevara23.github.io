import React, { Component } from "react";
import { Link } from "react-router-dom";

import Icon from "../../../UI/Icon/Icon";
import Wischen from "../../../assets/projectImages/wischen.jpg";
import RealEstate from "../../../assets/projectImages/realestate.jpg";
import InteriorDesign from "../../../assets/projectImages/interiordesign.jpg";
import Splatter from "../../../assets/projectImages/splatter.jpg";
import MilennialGoT from "../../../assets/projectImages/MilennialGoT.jpg";
import Dribbble01 from "../../../assets/projectImages/dribbble01.jpg";

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
        case "Landing Page":
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
