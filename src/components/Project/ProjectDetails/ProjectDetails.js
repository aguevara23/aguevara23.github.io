import React from "react";
import { withRouter } from "react-router";

import classes from "./ProjectDetails.css";
import Image from "../../../UI/Image/Image";

const projectDetails = props => {
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
          <Image source={props.data.title} type="main" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(projectDetails);
