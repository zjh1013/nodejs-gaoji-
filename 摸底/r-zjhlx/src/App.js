import React, { Component } from "react";
import Router from "./router/index";
import "./css/index.css";
import "antd/dist/antd.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router></Router>
      </div>
    );
  }
}
