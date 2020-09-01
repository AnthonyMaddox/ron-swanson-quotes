import React, { Component } from "react";

function ButtonTwo(props) {
  console.log(props);
  return (
    <div>
      <div id="bTwo" className="quote">
        {props.newFoodQuote}
      </div>
    </div>
  );
}

export default ButtonTwo;
