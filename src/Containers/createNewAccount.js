import React, { Component } from "react";

class CreateNewAccount extends Component {
  render() {
    return (
      <div className="transparent">
        <div className="card container offset-l4">
          <div className="row s9">
            <div className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    // onChange={this.nameChangeHandler}
                    placeholder="First Name"
                    type="text"
                    className="validate"
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    // onChange={this.lastnameChangeHandler}
                    placeholder="Last Name"
                    type="text"
                    className="validate"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    // onChange={this.emailChangeHandler}
                    placeholder="Email"
                    type="email"
                    className="validate"
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    // onChange={this.phonenumberChangeHandler}
                    placeholder="phone Number"
                    type="tel"
                    className="validate"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    // onChange={this.usernameChangeHandler}
                    placeholder="Password"
                    type="password"
                    className="validate"
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    // onChange={this.passwordChangeHandler}
                    placeholder="Password Confirmation"
                    type="password"
                    className="validate"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    // onChange={this.usernameChangeHandler}
                    placeholder="Comapny"
                    type="text"
                    className="validate"
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    // onChange={this.passwordChangeHandler}
                    placeholder="Geolocational Address"
                    type="text"
                    className="validate"
                  />
                </div>
              </div>
              {/* <div className="row">
                <div className="input-field col s6">
                  <input
                    // onChange={this.genderChangeHandler}
                    placeholder="Gender"
                    type="text"
                    className="validate"
                  />
                </div>
              </div> */}
              <p>
                <label>
                  <input onClick={this.checkBoxHandler} type="checkbox" />
                  <span>
                    Do you agree on the terms and privacy things of KH-ecommerce
                    system?
                  </span>
                </label>
              </p>
              <button
                // onClick={this.submitButtonHandler}
                className={`waves-effect waves-light btn-small offset-l6`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewAccount;
