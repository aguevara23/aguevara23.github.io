import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import classes from "./App.css";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Project from "./components/Project/Project";
import About from "./components/About/About";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/portfolio-2018/">
        <div className={classes.App}>
          <Navbar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/portfolio/:projectName" component={Project} />
            <Route path="/portfolio" component={Portfolio} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
