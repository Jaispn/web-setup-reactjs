/**
 * Created by jai on 16/06/17.
 */
'use strict';
import _ from "lodash";
const loginCreds = {
    'admin@voluncia.com': "voluncia_admin@123"
}
const LOGGED_IN = 'logged_in';

function login(email, password) {
    localStorage.setItem(LOGGED_IN, true);
    if (loginCreds[email] && loginCreds[email] === password) {
        localStorage.setItem(LOGGED_IN, true);
    }
}

function logout() {
    localStorage.removeItem(LOGGED_IN);
}

function isLoggedIn() {
    return localStorage.getItem(LOGGED_IN);
}
module.exports = {
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn
}