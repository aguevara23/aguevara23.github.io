import React from "react";
import projects from "../../data";
import { Redirect } from "react-router-dom";

const project = props => {
  console.log("[Project.js]", props.location.pathname);

  const loadProject = pathname => {
    const project = projects.filter(project => project.path === pathname)[0];
    console.log(project);
    if (!project) {
      return <Redirect to="/portfolio" />;
    }

    return (
      <div>
        <h1>{project.title}</h1>
        <h3>{project.description}</h3>
      </div>
    );
  };

  return (
    <div>
      <button onClick={() => props.history.goBack()}>back to projects</button>
      {loadProject(props.location.pathname)}
    </div>
  );
};
// if project exists, render if. if not, redirect to projects

export default project;
