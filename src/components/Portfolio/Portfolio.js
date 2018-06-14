import React, { Component } from "react";

import PortfolioItem from "./PortfolioItem/PortfolioItem";

import classes from "./Portfolio.css";
import projects from "../../data";

// Portfolio is responsible for rendering each Portfolio Item
class Portfolio extends Component {
  state = {
    searchInput: "",
    projects: projects
  };

  // set search input state to match input value
  changeInputHandler = event => {
    this.setState({
      searchInput: event.target.value
    });
  };

  // submits search input to filter for projects
  submitHandler = event => {
    event.preventDefault();
    if (!this.state.searchInput) {
      return this.resetProjects();
    }
    this.filterProjects();
  };

  // searches for projects that contain search input keywords. removes all other projects from array
  filterProjects = () => {
    const filteredProjects = projects.filter(project => {
      return project.tags.includes(this.tokenizeWord(this.state.searchInput));
    });
    this.setState({ projects: filteredProjects });
  };

  // creates a token of inputted word so it matches multiple variations of the word
  tokenizeWord = word => {
    const token = word
      .replace(/[^\w\s]/gi, "")
      .toLowerCase()
      .trim();
    return token;
  };

  // clear search input
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
        tech={project.coreTech}
        demo={project.demo}
        gh={project.gh}
        path={project.path}
      />
    ));

    return (
      <div className={classes.Container}>
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
