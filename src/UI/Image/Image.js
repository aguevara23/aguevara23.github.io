import React, { Fragment } from "react";
import classes from "./Image.css";

import Wischen from "../../assets/projectImages/wischen.jpg";
import RealEstate from "../../assets/projectImages/realestate.jpg";
import InteriorDesign from "../../assets/projectImages/interiordesign.jpg";
import Splatter from "../../assets/projectImages/splatter.jpg";
import MilennialGoT from "../../assets/projectImages/MilennialGoT.jpg";
import Dribbble01 from "../../assets/projectImages/dribbble01.jpg";

const image = props => {
  const loadImage = () => {
    // use tertiary expression to render different class
    switch (props.source) {
      case "Wischen":
        return <img className={classes.Image} src={Wischen} alt="test" />;
      case "Real Estate Website":
        return <img className={classes.Image} src={RealEstate} alt="test" />;
      case "Splatter":
        return <img className={classes.Image} src={Splatter} alt="test" />;
      case "Resume Booster":
        return <img className={classes.Image} src={MilennialGoT} alt="test" />;
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
  return <Fragment>{loadImage()}</Fragment>;
};

export default image;
