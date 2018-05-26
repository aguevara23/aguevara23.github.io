import React from "react";
import classes from "./ProjectDetails.css";

const projectDetails = props => {
  return (
    <div className={classes.Project}>
      <div className={classes.Left}>
        <h1>{props.data.title}</h1>
        <h3>{props.data.description}</h3>
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
        <div className={classes.mainImage}>Image!</div>
      </div>
    </div>
  );
};

export default projectDetails;
