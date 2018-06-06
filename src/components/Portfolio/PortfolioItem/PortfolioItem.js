import React, { Component } from "react";
import { Link } from "react-router-dom";

import Wischen from "../../../assets/wischen.png";
import RealEstate from "../../../assets/realestate.png";
import InteriorDesign from "../../../assets/interiordesign.png";
import Splatter from "../../../assets/splatter.png";
import MilennialGoT from "../../../assets/MilennialGoT.png";
import Dribbble01 from "../../../assets/dribbble01.png";

import classes from "./PortfolioItem.css";

class PortfolioItem extends Component {
  render() {
    const loadImage = title => {
      switch (this.props.title) {
        case "Wischen":
          return <img className={classes.Image} src={Wischen} alt="test" />;
        case "Real Estate Website":
          return <img className={classes.Image} src={RealEstate} alt="test" />;
        case "Splatter":
          return <img className={classes.Image} src={Splatter} alt="test" />;
        case "Milennial Game of Thrones":
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

    return (
      <Link to={this.props.path}>
        <div className={classes.PortfolioItem}>
          {loadImage()}
          <div className={classes.TextBlock}>
            <h1 className={classes.Title}>{this.props.title}</h1>
            <div className={classes.Buttons}>
              <a target="_blank" href={this.props.demo}>
                Demo
              </a>
              <a target="_blank" href={this.props.gh}>
                Github
              </a>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default PortfolioItem;
