import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Search from "./Search";

const routing = (
  <Router>
    <div className="container">
      <span>
        <Link to="/">Latest</Link> • <Link to="/search">Search</Link>
      </span>

      <Route exact path="/" component={App} />
      <Route path="/search" component={Search} />
    </div>
  </Router>
);

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(routing, document.getElementById("root"));
