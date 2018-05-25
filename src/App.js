import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    const about = () => <h1>about</h1>;
    const portfolio = () => <h1>portfolio</h1>;
    const contact = () => <h1>contact</h1>;
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/about" component={about} />
          <Route path="/portfolio" component={portfolio} />
          <Route path="/contact" component={contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
