import React from "react";

import PortfolioItem from "./PortfolioItem/PortfolioItem";

import classes from "./Portfolio.css";
import projects from "../../data";

const portfolio = () => {
  const portfolioProjects = projects.map(project => (
    <PortfolioItem
      key={project.title}
      title={project.title}
      desc={project.description}
      demo={project.demo}
      gh={project.gh}
      path={project.path}
    />
  ));
  return (
    <div className={classes.Portfolio}>
      {portfolioProjects}
      <div>test</div>
    </div>
  );
};

export default portfolio;
