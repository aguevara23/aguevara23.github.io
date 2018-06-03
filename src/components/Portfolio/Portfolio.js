import React, { Component } from "react";

import PortfolioItem from "./PortfolioItem/PortfolioItem";

import classes from "./Portfolio.css";
import projects from "../../data";

class Portfolio extends Component {
  state = {
    searchInput: "",
    projects: projects
  };

  changeInputHandler = event => {
    this.setState({
      searchInput: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    if (!this.state.searchInput) {
      return this.resetProjects();
    }
    this.filterProjects();
  };

  filterProjects = () => {
    const filteredProjects = projects.filter(project => {
      return project.tags.includes(this.tokenizeWord(this.state.searchInput));
    });
    this.setState({ projects: filteredProjects });
  };

  tokenizeWord = word => {
    const token = word
      .replace(/[^\w\s]/gi, "")
      .toLowerCase()
      .trim();
    return token;
  };

  resetProjects = () => {
    this.setState({
      searchInput: "",
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
        <h1 className={classes.Header}>Projects</h1>
        <form
          className={classes.SearchForm}
          onSubmit={event => this.submitHandler(event)}
        >
          <input
            className={classes.SearchInput}
            value={this.state.searchInput}
            type="text"
            onChange={event => this.changeInputHandler(event)}
            placeholder="Search for Projects"
          />
          <p className={classes.Clear} onClick={this.resetProjects}>
            X
          </p>
        </form>
        <div className={classes.Portfolio}>{portfolioProjects}</div>
      </div>
    );
  }
}

export default Portfolio;
