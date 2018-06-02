import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import classes from "./App.css";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Project from "./components/Project/Project";
import About from "./components/About/About";

class App extends Component {
  render() {
    console.log("url:", process.env.PUBLIC_URL);
    return (
      <BrowserRouter basename={"/portfolio-2018/"}>
        <div className={classes.App}>
          <Navbar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/portfolio/:projectName" component={Project} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
