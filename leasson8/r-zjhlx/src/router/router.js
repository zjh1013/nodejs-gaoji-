import React from 'react'
import {BrowserRouter as Router , Route , Switch , Redirect} from 'react-router-dom'
import Home from '../views/home/home'

function RootRouter () {
    return <Router>
        <Switch>
            <Route path="/home" component={Home} />
            <Redirect from='/' to="/home" />
        </Switch>
    </Router>
}

export default RootRouter