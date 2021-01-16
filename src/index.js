import React from "react";
import ReactDOM from "react-dom";

const name = "Jeffrey";
const lname = "Martinez";
const number = 7;

ReactDOM.render(
  <div>
    <h1>Hello {`${name} ${lname}`}!</h1>
    <p>Your lucky number is {number}!</p>
  </div>,
  document.getElementById("root")
);
