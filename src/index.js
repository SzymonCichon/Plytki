import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Header
} from "./components";

ReactDOM.render(
  <Router>
    <Header />
  </Router>,

  document.getElementById("root")
);