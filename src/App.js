import "./nav.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jobs from "./Jobs";
import Poster from "./Poster";

export default function App() {
  return (
    <div>
      <div className="title">
        BION <br />
        ANONYMOUS MESSAGING
      </div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">See Messages</Link>
              </li>
              <li>
                <Link to="/post">Post Message</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/post">
              <Poster />
            </Route>

            <Route path="/">
              <Jobs />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
