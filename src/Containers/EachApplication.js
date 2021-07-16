import { navigate } from "@reach/router";
import React from "react";

const eachItem = (props) => {
  // console.log(props.owner.email,+'+251',props.owner.phonenumber)
  // const descriptionHandler=()=>{
  //   navigate()
  // }
  return (
    <div className="row">
      <div className="col l8">
        <div onClick={props.imClicked} className="card horizontal">
          <div className="card-image circular">
            <img src={props.image}  alt="can get p"/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h5>{props.name}</h5>
              <p>{props.price} ETB</p>
            </div>
            <div className="card-action">
              <span>this is for more description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default eachItem;
