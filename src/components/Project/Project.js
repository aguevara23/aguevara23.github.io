import React from "react";
import projects from "../../data";
import { Redirect } from "react-router-dom";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import classes from "./Project.css";

const project = props => {
  const loadProject = pathname => {
    const project = projects.filter(project => project.path === pathname)[0];
    return project ? (
      <ProjectDetails data={project} />
    ) : (
      <Redirect to="/portfolio" />
    );
  };

  return (
    <div className={classes.Container}>
      {loadProject(props.location.pathname)}
    </div>
  );
};
export default project;
