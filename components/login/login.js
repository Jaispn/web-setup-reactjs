/**
 * Created by jai on 14/05/17.
 */
import React from 'react';
import HttpService from '../../services/http-service';
import SessionService from '../../services/session-service';

class LoginComponent extends React.Component {
    constructor() {
        super();
        this.onSubmit = this.handleSubmit.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }

    handleSubmit(e) {
        let self = this;
        e.preventDefault();
        HttpService.login({
            email: self.refs.email.value, password: self.refs.password.value
        }, function (err, res) {
            res = res.body;
            if (res.message === 'success') {
                SessionService.login();
                alert("Logged In successfully");
                window.location.assign("/");
            }else{
                alert("Please enter correct email/password");
            }
        });
    }

    isLoggedIn() {
        if (SessionService.isLoggedIn()) {
            window.location.assign("/");
            return true;
        }
        return false;

    }

    render() {
        return (<div>
                {
                    !this.isLoggedIn() ?
                        <div className="login-input row form-group">
                            <div>
                                <div className="col-md-12 form-control user-name">User Name:</div>
                                <input className="col-md-12 form-control" type="text" ref="email"/>
                                <div className="col-md-12 form-control user-name">Password:</div>
                                <input className="col-md-12 form-control" type="password" ref="password"/>
                                <button className="col-md-5 click-button" onClick={this.onSubmit}>Login</button>
                                <button className="col-md-5 col-md-push-2 click-button" onClick={this.onSubmit}>Forgot
                                </button>
                            </div>
                        </div>
                        :
                        <div></div>
                }
            </div>
        );
    }
}

export default LoginComponent;