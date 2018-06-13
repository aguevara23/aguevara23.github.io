import React from "react";
import classes from "./ProjectDetails.css";

import Wischen from "../../../assets/projectImages/wischen.jpg";
import RealEstate from "../../../assets/projectImages/realestate.jpg";
import InteriorDesign from "../../../assets/projectImages/interiordesign.jpg";
import Splatter from "../../../assets/projectImages/splatter.jpg";
import MilennialGoT from "../../../assets/projectImages/MilennialGoT.jpg";
import Dribbble01 from "../../../assets/projectImages/dribbble01.jpg";
import ColorGame from "../../../assets/projectImages/colorgame.jpg";

import { withRouter } from "react-router";

const projectDetails = props => {
  const loadImage = title => {
    switch (props.data.title) {
      case "Wischen":
        return (
          <img
            className={classes.mainImage}
            src={Wischen}
            alt="A react app that lets people create a watchlist of movies"
          />
        );
      case "Real Estate Website":
        return (
          <img
            className={classes.mainImage}
            src={RealEstate}
            alt="A responsive redesign for a real estate website"
          />
        );
      case "Interior Design":
        return (
          <img
            className={classes.mainImage}
            src={InteriorDesign}
            alt="A portfolio website for an interior designer"
          />
        );
      case "Splatter":
        return (
          <img
            className={classes.mainImage}
            src={Splatter}
            alt="A fun app for creating simple splatter art"
          />
        );
      case "Landing Page":
        return (
          <img
            className={classes.mainImage}
            src={Dribbble01}
            alt="A mobile responsive landing page"
          />
        );
      case "Resume Booster":
        return (
          <img
            className={classes.mainImage}
            src={MilennialGoT}
            alt="A fun app based on random data generators"
          />
        );
      case "Guess the Color":
        return (
          <img
            className={classes.mainImage}
            src={ColorGame}
            alt="A react native game based on color"
          />
        );
      default:
        return null;
    }
  };

  const renderTechList = () => {
    let techList = props.data.tech.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
    return techList;
  };

  const demoButton = (
    <a target="_blank" href={props.data.demo}>
      View Demo
    </a>
  );

  return (
    <div className={classes.Project}>
      <div className={classes.Left}>
        <button
          className={classes.GoBack}
          onClick={() => props.history.goBack()}
        >
          back to projects
        </button>
        <h1>{props.data.title}</h1>
        <h3 className={classes.Header}>Summary</h3>
        <p>{props.data.description}</p>
        <h3 className={classes.Header}>Technology used:</h3>
        <ul className={classes.TechList}>{renderTechList()}</ul>
        <div className={classes.Buttons}>
          {props.data.demo ? demoButton : null}
          <a target="_blank" href={props.data.gh}>
            Github
          </a>
        </div>
      </div>
      <div className={classes.Right}>
        <div className={classes.mainImageContainer}>
          {loadImage(props.data.title)}
        </div>
      </div>
    </div>
  );
};

export default withRouter(projectDetails);
