import React, { Component } from "react";
import { navigate, Link } from "@reach/router";

import { useDispatch, useSelector } from "react-redux";

// import axios from "axios";
import UserApplications from "./userApplications";
import "./loader.css";

const Loggedin = () => {
  const dispatch = useDispatch();

  const { item, loading } = useSelector((state) => state.application);
  // state = {
  //   name: "Million",
  //   items: [],
  //   loading: true,
  // };
  const clickedForDetailHandler = (id) => {
    navigate(`/detailForUser/${id}`);
  };
  const loggedOutHandler = (event) => {
    localStorage.removeItem("token");
    navigate("/");
  };
  //   componentDidMount() {
  //     if (!localStorage.getItem("token")) {
  //       navigate("/signin");
  //     } else {
  //       fetch("http://localhost:3200/itemsInuser", {
  //         method: "get",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorizaion: localStorage.getItem("token"),
  //         },
  //       })
  //         .then((res) => res.json())
  //         .then((res) => {
  //           this.setState({ items: res, loading: false });
  //           // console.log(res)
  //         });
  //     }
  //   }
  // render() {
  // console.log(this.state.items)
  let loader;
  if (loading) {
    loader = (
      <div style={{ marginLeft: "170px" }} className="align-center">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <div className="pushDown">
      <div className="row">
        <div className="col l10 m8 s12">
          <h3>Welcome to KH-Ecommerce system mr. </h3>
          <div className="row">
            <Link
              to="/addnewapplication"
              className="waves-effect waves-light btn-small"
            >
              Add New Application
            </Link>
          </div>
        </div>
        <div className="col l2 m4 s12">
          <button
            className="waves-effect waves-light btn-small"
            onClick={loggedOutHandler}
          >
            Log out
          </button>
        </div>
      </div>
      <div>
        <div className="row">
          {loader}
          <UserApplications />
          {/* {this.state.items.map((each) => {
              return (
                // <InuserItem
                //   clicked={() => this.clickedForDetailHandler(each._id)}
                //   name={each.itemname}
                //   price={each.itemprice}
                //   description={each.itemdescription}
                //   key={each._id}
                //   image={each.itemimage}
                //   id={each._id}
                // />
              );
            })} */}
        </div>
      </div>
    </div>
  );
  // }
};
export default Loggedin;
