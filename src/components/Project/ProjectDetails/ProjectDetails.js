import React from "react";
import classes from "./ProjectDetails.css";
import Wischen from "../../../assets/wischen.png";
import RealEstate from "../../../assets/realestate.png";
import InteriorDesign from "../../../assets/interiordesign.png";
import Splatter from "../../../assets/splatter.png";
import MilennialGoT from "../../../assets/MilennialGoT.png";
import { withRouter } from "react-router";

const projectDetails = props => {
  const loadImage = title => {
    switch (props.data.title) {
      case "Wischen":
        return <img className={classes.mainImage} src={Wischen} alt="test" />;
      case "Real Estate Website":
        return (
          <img className={classes.mainImage} src={RealEstate} alt="test" />
        );
      case "Interior Design":
        return (
          <img className={classes.mainImage} src={InteriorDesign} alt="test" />
        );
      case "Splatter":
        return <img className={classes.mainImage} src={Splatter} alt="test" />;
      case "Milennial Game of Thrones":
        return (
          <img className={classes.mainImage} src={MilennialGoT} alt="test" />
        );
      default:
        return null;
    }
  };

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
        <h3>Description</h3>
        <h3>{props.data.description}</h3>
        <h3>Technology used:</h3>
        <div className={classes.Buttons}>
          <a target="_blank" href={props.data.demo}>
            View Demo
          </a>
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
