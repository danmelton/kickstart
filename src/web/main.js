console.log("home.js loaded");
import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./components/HelloMessage";

var mountNode = document.getElementById("main");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);
