import React from "react";
import classes from "./ProjectDetails.css";
import Wischen from "../../../assets/wischen.png";
import RealEstate from "../../../assets/realestate.png";
import InteriorDesign from "../../../assets/interiordesign.png";
import { withRouter } from "react-router";
// import images from "../../../assets";

const projectDetails = props => {
  // console.log("images", images);
  console.log(props);
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
