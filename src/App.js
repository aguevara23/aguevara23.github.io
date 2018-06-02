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
    const contact = () => <h1>contact</h1>;

    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={contact} />
          <Switch>
            <Route path="/portfolio/:projectName" component={Project} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
// Photo by Jeremy Thomas on Unsplash
