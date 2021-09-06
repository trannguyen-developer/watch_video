import React, { Component, Fragment } from 'react';

import Home from './components/Pages/Home'

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
        fetch('/api/hello')
        .then(response => response.json())
        .then(data => this.setState({ message: data }))
    };
  
    render() {
        console.log(this.state);
        return(
        <Fragment>
            <Home />
        </Fragment>
        )
    };
};


export default App;
