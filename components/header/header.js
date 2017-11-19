/**
 * Created by jai on 17/06/17.
 */
import React from 'react';
import SessionService from "../../services/session-service";

class HeaderComponent extends React.Component {
    constructor(props){
        super(props);
        this.logoutMe = this.logoutMe.bind(this);
    }
    logoutMe() {
        SessionService.logout();
        alert("Logout Successfully");
        window.location.assign("/");
    }
    render() {
        return (
            <div className="row menu-tabs">
                <a className="col-xs-12 col-sm-6 col-md-4 btn btn-default" href="#/users">Users</a>
                <a className="col-xs-12 col-sm-6 col-md-4 btn btn-default" href="#/suppliers">Suppliers</a>
                <a className="col-xs-12 col-sm-6 col-md-4 btn btn-default" href="#/products">Products</a>

                <button className="btn btn-default btn-sm pull-right glyphicon glyphicon-log-out"
                        onClick={this.logoutMe}>Logout
                </button>
            </div>
        );
    }
}

export default HeaderComponent;