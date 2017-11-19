/**
 * Created by jai on 04/06/17.
 */
import _ from "lodash";
import request from "superagent";

function _post(url, headers, data) {
    return fetch(url,
        {
            method: "POST",
            headers: headers,
            body: _.isObject(data) ? JSON.stringify(data) : data,

        })
}

function _get(url, header) {
    return fetch(url, {
        method: "GET",
        header: header
    })
}

function _put() {

}

function _delete() {

}

function _getHeaders() {
    return {
        'Content-Type': 'application/json',
        'Access-Control-Request-Origin': "*",
        // 'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'content-type'
    }
}

function login(params, cb) {
    request
        .get("http://localhost:8080/login")
        .query(params)
        .end(cb)
}

// function login(data) {
//     return fetch("http://192.168.1.106:8080/admin/login?email=jaiprakash@gmail.com&password=12345")
// }
module.exports = {
    login: login
}