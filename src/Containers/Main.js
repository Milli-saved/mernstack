import React, { Component } from "react";
import { Link, Router } from "@reach/router";

import Home from "./Home";
import Signin from "./Signin";
import Admin from "./Admin";
import CreatenewAccount from "./createNewAccount";
import Loggedin from "./LoggedIn";
import AddnewApplication from "./AddnewApplication";
import ApplicationDescription from "./ApplicationDescription";
import ShowApplicants from './ShowApplicants'

class Main extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="transparent">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                Tech-Camp
              </Link>
              <ul id="nav-moblie" className="right hide-on-med-and-down">
                <li>
                  <Link to="/signin">Sign in</Link>
                </li>
                {/* <li>
                  <Link to="/admin">Admin</Link>
                </li> */}
              </ul>
            </div>
          </nav>
        </header>
        <Router>
          <Home path="/" />
          <Signin path="/signin" />
          <Admin path="/admin" />
          <CreatenewAccount path="/createNewAccount" />
          <Loggedin path="loggedin" />
          <AddnewApplication path="/addnewapplication" />
          <ApplicationDescription path="/applicationdescription/:id" />
          <ShowApplicants path="/showapplicants" />
        </Router>
      </div>
    );
  }
}

export default Main;
