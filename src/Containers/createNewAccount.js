import React, { Component } from "react";
import { useDispatch, useSelector } from 'react-redux'



const CreateNewAccount = () => {
  let info = {
    firstName: null,
    lastName: null,
    phone: null,
    address: null,
    email: null,
    password: null,
    company: null,
  };

  const nameChangeHandler=(event)=>{
    info.firstName = event.target.value
  }

  const lastnameChangeHandler=(event)=>{
    info.lastName = event.target.value
  }
  const nameChangeHandler=(event)=>{
    info.phone = event.target.value
  }
  const addressChangeHandler=(event)=>{
    info.address = event.target.value
  }
  const emailChangeHandler=(event)=>{
    info.email = event.target.value
  }
  const phonenumberChangeHandler=(event)=>{
    info.phone = event.target.value
  }
  const companyChangeHandler=(event)=>{
    info.company = event.target.value
  }
  const passwordChangeHandler =(event)=>{
    info.password = event.target.value
  }


  return (
    <div className="transparent">
      <div className="card container offset-l4">
        <div className="row s9">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  onChange={nameChangeHandler}
                  placeholder="First Name"
                  type="text"
                  className="validate"
                />
              </div>
              <div className="input-field col s6">
                <input
                  onChange={lastnameChangeHandler}
                  placeholder="Last Name"
                  type="text"
                  className="validate"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  onChange={emailChangeHandler}
                  placeholder="Email"
                  type="email"
                  className="validate"
                />
              </div>
              <div className="input-field col s6">
                <input
                  onChange={phonenumberChangeHandler}
                  placeholder="phone Number"
                  type="tel"
                  className="validate"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  onChange={passwordChangeHandler}
                  placeholder="Password"
                  type="password"
                  className="validate"
                />
              </div>
              {/* <div className="input-field col s6">
                <nameChangeHandlerinput
                  // onChange={this.passwordChangeHandler}
                  placeholder="Password Confirmation"
                  type="password"
                  className="validate"
                />
              </div> */}
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  onChange={companyChangeHandler}
                  placeholder="Comapny"
                  type="text"
                  className="validate"
                />
              </div>
              <div className="input-field col s6">
                <input
                  onChange={addressChangeHandler}
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
};

export default CreateNewAccount;
