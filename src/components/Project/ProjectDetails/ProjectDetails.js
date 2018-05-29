import React from "react";
import classes from "./ProjectDetails.css";
import Wischen from "../../../assets/wischen.png";
import RealEstate from "../../../assets/realestate.png";
import InteriorDesign from "../../../assets/interiordesign.png";
import Splatter from "../../../assets/splatter.png";
import MilennialGoT from "../../../assets/MilennialGoT.png";
import Dribbble01 from "../../../assets/dribbble01.png";
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
      case "Dribbble 01":
        return (
          <img className={classes.mainImage} src={Dribbble01} alt="test" />
        );
      case "Milennial Game of Thrones":
        return (
          <img className={classes.mainImage} src={MilennialGoT} alt="test" />
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
        <h3>Summary</h3>
        <p>{props.data.description}</p>
        <h3>Technology used:</h3>
        <ul>{renderTechList()}</ul>
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
