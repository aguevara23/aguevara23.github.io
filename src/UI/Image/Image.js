import React, { Fragment } from "react";
import classes from "./Image.css";

import Wischen from "../../assets/projectImages/wischen.jpg";
import RealEstate from "../../assets/projectImages/realestate.jpg";
import InteriorDesign from "../../assets/projectImages/interiordesign.jpg";
import Splatter from "../../assets/projectImages/splatter.jpg";
import MilennialGoT from "../../assets/projectImages/MilennialGoT.jpg";
import Dribbble01 from "../../assets/projectImages/dribbble01.jpg";
import ColorGame from "../../assets/projectImages/colorgame.jpg";
import TivixWeather from "../../assets/projectImages/tivixweather.jpg";

// uses different styles depending on type prop
const image = props => {
  let style = null;
  props.type === "main"
    ? (style = classes.MainImage)
    : (style = classes.BGImage);

  // loads different Images depending on the source prop
  const loadImage = () => {
    switch (props.source) {
      case "Wischen":
        return (
          <img
            className={style}
            src={Wischen}
            alt="A react app that lets people create a watchlist of movies"
          />
        );
      case "Real Estate Website":
        return (
          <img
            className={style}
            src={RealEstate}
            alt="A responsive redesign for a real estate website"
          />
        );
      case "Splatter":
        return (
          <img
            className={style}
            src={Splatter}
            alt="An fun app for creating simple splatter art"
          />
        );
      case "Resume Booster":
        return (
          <img
            className={style}
            src={MilennialGoT}
            alt="A fun app based on random data generators"
          />
        );
      case "Interior Design":
        return (
          <img
            className={style}
            src={InteriorDesign}
            alt="A portfolio website for an interior designer"
          />
        );
      case "Landing Page":
        return (
          <img
            className={style}
            src={Dribbble01}
            alt="A mobile responsive landing page"
          />
        );
      case "Guess the Color":
        return (
          <img
            className={style}
            src={ColorGame}
            alt="A react native game based on color"
          />
        );
      case "Weather Forecast":
        return (
          <img
            className={style}
            src={TivixWeather}
            alt="A 5-day temperature forecast"
          />
        );
      default:
        return null;
    }
  };
  return <Fragment>{loadImage()}</Fragment>;
};

export default image;
