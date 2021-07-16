import React, { Component } from "react";
import { navigate } from "@reach/router";

class addNewItem extends Component {
  state = {
    itemname: "",
    itemprice: "",
    itemimage: "",
    itemdescription: "",
  };
  itemNameChangeHandler = (event) => {
    this.setState({ itemname: event.target.value });
  };
  itemPriceChangeHandler = (event) => {
    this.setState({ itemprice: event.target.value });
  };
  itemImageChangeHandler = (event) => {
    this.setState({ itemimage: event.target.value });
  };
  itemDescriptionChangeHandler = (event) => {
    this.setState({ itemdescription: event.target.value });
  };
  submitHandler = () => {
    fetch("http://localhost:3200/item", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorizaion: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        itemname: this.state.itemname,
        itemprice: this.state.itemprice,
        itemimage: this.state.itemimage,
        itemdescription: this.state.itemdescription,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/loggedin");
      })
      .catch((e) => console.log("error is : ", e));
  };
  render() {
    return (
      <div className="pushDown">
        <div className="card container offset-l4">
          <div className="row">
            <div className="col">
              <div className="input-field col s6">
                <input
                //   onChange={this.itemNameChangeHandler}
                  placeholder="Item Name"
                  type="text"
                  className="validate"
                />
              </div>
              <div className="input-field col s6">
                <input
                //   onChange={this.itemPriceChangeHandler}
                  placeholder="Item price"
                  type="text"
                  className="validate"
                />
              </div>
              <div className="input-field col s6">
                <input
                //   onChange={this.itemImageChangeHandler}
                  placeholder="Item Image Link"
                  type="text"
                  className="validate"
                />
              </div>
              <div className="input-field col s6">
                <input
                //   onChange={this.itemDescriptionChangeHandler}
                  placeholder="Item Description"
                  type="text"
                  className="validate"
                />
              </div>
              <button
                // onClick={this.submitHandler}
                className="waves-effect waves-light btn-small"
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addNewItem;
