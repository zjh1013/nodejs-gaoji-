import React from 'react';
import {BrowserRouter as Router ,Route ,Switch,Redirect} from 'react-router-dom'
import Home from '../views/home/home'
import Login from '../views/user/login'
function RootRouter (){
    return <Router>
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Redirect from="/" to="/home" />
        </Switch>
    </Router>
}
export default RootRouter