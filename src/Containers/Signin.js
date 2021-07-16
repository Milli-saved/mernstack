import React from "react";
import { useEffect } from "react";
import { navigate } from "@reach/router";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../store/Recruiter/action";

const Login = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const { loginError,user, token } = useSelector((state) => state.recruiter);

  useEffect(() => {
    if (token) {
      navigate("/loggedin")
      console.log(token)
    }
  }, [token]);

  let userInput = {
    email: null,
    password: null,
  };
  const emailHandler = (event) => {
    userInput.email = event.target.value;
  };
  const passwordHandler = (event) => {
    userInput.password = event.target.value;
  };
  const submitHandler = () => {
    // console.log(user);
    dispatch(loginAsync(userInput.email, userInput.password));
  };

  const createNewHandler = () => {
    navigate("/createNewAccount");
  };

  return (
    <div className="transparent pushDown">
      <div className="row">
        <div className="col s12 m6 offset-l3">
          <div className="card">
            <div className="card-content">
              <h4>Sign IN</h4>
              <div className="row">
                {loginError && loginError.response ? (
                  <h1>`$loginError.response`</h1>
                ) : null}
                <div className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <input
                        name="email"
                        placeholder="Email"
                        id="icon_prefix"
                        type="text"
                        onChange={emailHandler}
                        className="validate"
                      />
                    </div>
                    <div className="input-field col s6">
                      <input
                        name="password"
                        placeholder="Password"
                        onChange={passwordHandler}
                        id="icon_telephone"
                        type="password"
                        className="validate"
                      />
                    </div>
                    <button
                      onClick={submitHandler}
                      type="submit"
                      className="waves-effect waves-light btn-small"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <button
                  onClick={createNewHandler}
                  className="waves-effect waves-light btn-small"
                >
                  Create New Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
