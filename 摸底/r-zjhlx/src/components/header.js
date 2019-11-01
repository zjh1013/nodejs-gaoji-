import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class header extends Component {
  render() {
    return (
      <div className="hea">
        <NavLink to="/liebiao" activeClassName="ac">
          列表
        </NavLink>
        <NavLink to="/fabiaos" activeClassName="ac">
          发表
        </NavLink>
        <NavLink to="/logins" activeClassName="ac">
          登录
        </NavLink>
      </div>
    );
  }
}
