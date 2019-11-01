import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Fa from "../views/fabiaos";
import Lie from "../views/liebiao";
import Login from "../views/logins";
import Detail from "../views/detail";

function RootRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/fabiaos" component={Fa}></Route>
        <Route path="/liebiao" component={Lie}></Route>
        <Route path="/logins" component={Login}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Redirect from="/" to="/fabiaos"></Redirect>
      </Switch>
    </Router>
  );
}
export default RootRouter;
