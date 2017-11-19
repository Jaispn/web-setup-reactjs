'use strict';
// import  style from './css/main.scss';
import React from 'react';
import Login from './components/login/login';
import Home from './components/home/home';
import Headear from './components/header/header';
import Users from './components/users/users';
import suppliers from './components/suppliers/suppliers';
import products from './components/products/products';
import SessionService from "./services/session-service";
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }

    isLoggedIn() {
        if (!SessionService.isLoggedIn()) {
            browserHistory.push('#/login');
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className="container">
                {this.isLoggedIn() ? <Headear/> : <div></div>}
                <Router history={hashHistory}>
                    <Route path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/suppliers" component={suppliers}/>
                    <Route path="/products" component={products}/>
                </Router>
            </div>
        )
    }
}

export default App;