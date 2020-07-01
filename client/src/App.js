import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch"

class App extends Component {
  render() {
    return (
      <Router>
      <Nav/>
      <Switch>
        <Route exact path = "/" component={Search} />
        <Route exact path = "/saved" component={Saved} />
        <Route exact path = "*" component={NoMatch} />
      </Switch>
      </Router>
    );
  }
}

export default App;
