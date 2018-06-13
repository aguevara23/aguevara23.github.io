import React, { Fragment } from "react";
import classes from "./Image.css";

import Wischen from "../../assets/projectImages/wischen.jpg";
import RealEstate from "../../assets/projectImages/realestate.jpg";
import InteriorDesign from "../../assets/projectImages/interiordesign.jpg";
import Splatter from "../../assets/projectImages/splatter.jpg";
import MilennialGoT from "../../assets/projectImages/MilennialGoT.jpg";
import Dribbble01 from "../../assets/projectImages/dribbble01.jpg";
import ColorGame from "../../assets/projectImages/colorgame.jpg";

const image = props => {
  const loadImage = () => {
    // use tertiary expression to render different class
    switch (props.source) {
      case "Wischen":
        return (
          <img
            className={classes.Image}
            src={Wischen}
            alt="A react app that lets people create a watchlist of movies"
          />
        );
      case "Real Estate Website":
        return (
          <img
            className={classes.Image}
            src={RealEstate}
            alt="A responsive redesign for a real estate website"
          />
        );
      case "Splatter":
        return (
          <img
            className={classes.Image}
            src={Splatter}
            alt="An fun app for creating simple splatter art"
          />
        );
      case "Resume Booster":
        return (
          <img
            className={classes.Image}
            src={MilennialGoT}
            alt="A fun app based on random data generators"
          />
        );
      case "Interior Design":
        return (
          <img
            className={classes.Image}
            src={InteriorDesign}
            alt="A portfolio website for an interior designer"
          />
        );
      case "Landing Page":
        return (
          <img
            className={classes.Image}
            src={Dribbble01}
            alt="A mobile responsive landing page"
          />
        );
      case "Guess the Color":
        return (
          <img
            className={classes.Image}
            src={ColorGame}
            alt="A react native game based on color"
          />
        );
      default:
        return null;
    }
  };
  return <Fragment>{loadImage()}</Fragment>;
};

export default image;
