console.log("app1.js loaded");
import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./components/HelloMessage";

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Dan" />, mountNode);
