'use strict';
import React from 'react';
var httpService = require("./services/http-service");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: ''
        }
    }

    onChangeHandle(e) {
        e.preventDefault();
        let self = this;
        if (this.refs.searchText.value) {
            httpService.getSuggestions(this.refs.searchText.value)
                .then(function (results) {
                    return self.setState({data: results});
                }).catch(function (err) {
                return self.setState({data: []});
            })
        }else{
            return self.setState({data: []});
        }
    }

    handleClick(e) {
        e.preventDefault();
        let value = e.currentTarget.innerText;
        this.refs.searchText.value = value;
        this.setState({data: []});

    }

    getDropdownList() {
        var self = this;
        if (this.state.data.length > 0) {
            return (
                <ul className="login-ul">
                    {
                        self.state.data.map((item, index) => (
                            <li className="login-li" key={index} onClick={self.handleClick.bind(self)}>
                                <span>
                                    {item.search(self.refs.searchText.value) > 0 ?
                                        item.substr(0, item.search(self.refs.searchText.value))
                                        :
                                        ""
                                    }
                                </span>
                                <b>{self.refs.searchText.value}</b>
                                <span>
                                    {
                                        item.search(self.refs.searchText.value) > 0 ?
                                            item.substr(item.search(self.refs.searchText.value) + self.refs.searchText.value.length)
                                            :
                                            item.substr(self.refs.searchText.value.length)
                                    }
                            </span>
                            </li>))
                    }
                </ul>
            )
        }

    }

    render() {
        return (
            <div className="login-input">
               Type here to get suggestions!!!
                <input className="input_type" type="text" name="search" ref="searchText"
                       onChange={this.onChangeHandle.bind(this)}/>
                {this.getDropdownList.call(this)}
            </div>
        );
    }
}

export default App;