import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Pages/Home';
import Admin from './components/Pages/Admin';
import Detail from './components/Pages/Detail';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

    const dispatch = useDispatch();

    const getData = useSelector(state => state)
    
    useEffect(() => {
        axios.get('/api/get-data').then((response) => {
            dispatch({type: 'ALL_VIDEO', data: response.data});
        });
    }, []);

    
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path="/admin" component={Admin} />
                    <Route path="/detail/:slug" component={Detail} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;
