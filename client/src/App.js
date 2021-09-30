import React, { Fragment, useEffect, useState } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/Pages/Home'
import Admin from './components/Pages/Admin'
import axios from "axios";

const App = () => {

    const [allVideo, setAllVideo] = useState()

    useEffect(() => {
        axios.get('/api/get-data').then((response) => {
            console.log(response.data);
            setAllVideo(response.data);
        });
    }, []);

    
    return (
        <Fragment>
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/admin" component={Admin} />
            </Router>
        </Fragment>
    );
};


export default App;
