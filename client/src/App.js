import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from './components/Pages/Home'
import Admin from './components/Pages/Admin'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            data: '999',
            test: 'tester'
        };
    }

    componentDidMount() {
        fetch('/api/GetData')
        .then(response => response.json())
        .then(data => this.setState({ message: data }))
    };
  
    render() {
        console.log(this.state);
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/admin" component={Admin} />
            </Router>
        )
    };
};


export default App;
