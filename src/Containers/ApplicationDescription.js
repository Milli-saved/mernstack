import React, { Component } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
class itemdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: [],
      loading: true,
      showOwner: false,
    };
  }
  //   componentDidMount() {
  //     axios.get("http://localhost:3200/item/" + this.props.id).then((res) => {
  //       this.setState({ selectedItem: res.data, loading: false });
  //     });
  //   }
  backButtonHander = () => {
    navigate("/");
  };
  //   contactOwnerHandler = () => {
  //     this.setState({ showOwner: !this.state.showOwner });
  //   };

  render() {
    // let owneris = this.state.selectedItem.owner;
    // console.log(owneris);
    // let owner;
    // if (this.state.loading === false) {
    //   owner = (
    //     <div>
    //       <h4>
    //         {owneris.firstname} {owneris.lastname}
    //       </h4>
    //       <h5>{owneris.email}</h5>
    //   <span>+251{owneris.phonenumber}</span>
    //     </div>
    //   );
    // }

    return (
      <div className="pushDown">
        <div className="row">
          <div>
            {/* <button
            onClick={this.backButtonHander}
            className="waves-effect waves-light btn-small"
          >
            <i className="material-icons">arrow_back</i>
          </button> */}
          </div>
          <div className="col l8 m12 s12">
            <div className="card center-align">
              <div className="card-content dark-text">
                {/* <h2 className="">{this.state.selectedItem.itemname} </h2> */}
                {/* eslint-disable-next-line */}
                {/* <img src={this.state.selectedItem.itemimage} alt="can get p" />
              <p>{this.state.selectedItem.itemprice} ETB</p>
              <p> {this.state.selectedItem.itemdescription} </p> */}
                <h4>more detail</h4>
              </div>
            </div>
            <div
              style={{ margin: "20px", marginLeft: "240px" }}
              className="row"
            >
              <div className="col">
                <button
                  // onClick={this.contactOwnerHandler}
                  className="waves-effect waves-light btn-small"
                >
                  Apply for the Vaccancy
                </button>
                {/* {this.state.showOwner ? owner : null} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default itemdetails;
