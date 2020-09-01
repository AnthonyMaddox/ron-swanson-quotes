import React from "react";

function ButtonOne(props) {
  return (
    <div>
      <div id="bOne" className="quote">
        {props.newQuote}{" "}
      </div>
    </div>
  );
}

export default ButtonOne;
