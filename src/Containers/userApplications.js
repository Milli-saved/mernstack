import React from "react";
import { Link } from "@reach/router";

import image from "../img/a.jpg";

const inUser = (props) => {
  return (
    <div className="col l8 m12 s12">
      <ul className="collection">
        <li
          onClick={props.clicked}
          className="collection-item avatar transparent"
        >
          <div className="row">
            <div className="col l7 m8 s12">
              <img className="circle" src={image} alt="no conenction" />
              <span className="title text-white">Job name</span>
              <p>Job Description</p>
              <p>Job Application</p>
            </div>
            <div className="col l5 m4 s12">
              <Link
                to="/showapplicants"
                className="waves-effect waves-light btn-small"
              >
                Show Applicants
              </Link>
            </div>
            {/* <a className="third-content" href="/todetail">Delete</a> */}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default inUser;
