import React, { Component } from "react";

import PortfolioItem from "./PortfolioItem/PortfolioItem";

import classes from "./Portfolio.css";
import projects from "../../data";

class Portfolio extends Component {
  state = {
    searchInput: [],
    projects: projects
  };

  changeInputHandler = event => {
    this.setState({
      searchInput: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.filterProjects();
  };

  filterProjects = () => {
    const filteredProjects = projects.filter(project => {
      return project.tags.includes(this.tokenizeWord(this.state.searchInput));
    });
    this.setState({ projects: filteredProjects });
  };

  tokenizeWord = word => {
    const token = word.replace(/[^\w\s]/gi, "").toLowerCase();
    return token;
  };

  resetProjects = () => {
    this.setState({
      searchInput: null,
      projects: projects
    });
  };

  render() {
    let portfolioProjects = this.state.projects.map(project => (
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
      <div>
        <h1>Projects</h1>
        <form onSubmit={event => this.submitHandler(event)}>
          <input
            value={this.state.searchInput}
            onChange={event => this.changeInputHandler(event)}
            placeholder="Search for Projects"
          />
          <p onClick={this.resetProjects}>clear</p>
        </form>
        <div className={classes.Portfolio}>{portfolioProjects}</div>
      </div>
    );
  }
}

export default Portfolio;
