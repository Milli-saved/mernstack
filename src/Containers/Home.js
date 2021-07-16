import React from "react";
import EachApplication from "./EachApplication";
import { navigate } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";

import "./loader.css";

const Home = () => {
  const dispatch = useDispatch();
  const { loginError,user, token } = useSelector((state) => state.recruiter);
console.log(token)

  const itemClickedHandler=(id)=>{
    navigate(`/applicationdescription/${id}`)
  }

  const { items, loading } = useSelector((state) => state.application);
  let loader = null;
  loading
    ? (loader = (
        <div style={{ marginLeft: "170px" }} className="align-center">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      ))
    : (loader = null);
  return (
    <div className="pushDown">
      <div className="nav-wrapper">
        <form className="container">
          <div className="input-field">
            <input id="search" type="search" required />
            <label className="label-icon" for="search">
              <i className="material-icons">search</i>
            </label>
            {/* <i class="material-icons">close</i> */}
          </div>
        </form>
      </div>
      {loader}
      {items.map((each) => {
        return (
          <EachApplication
            imClicked={() => itemClickedHandler(each.id)}
            key={each.id}
            id={each.id}
            name={each.itemname}
            image={each.itemimage}
            price={each.itemprice}
            owner={each.owner}
          />
          // <div>
          //   {console.log(each)}
          //   <h1 key= {each.id}>Hello</h1>
          // </div>
        );
      })}
    </div>
  );
};

export default Home;
