import React from 'react';
import { Box } from '@material-ui/core';
import classes from './style.module.scss'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={classes.header}>
            <Box display="flex" alignItems="center">
                <Link to={'/'}>
                    <img height="35px" src="assets/img/logo.png" alt="logo" />
                </Link>
            </Box>
            <div className={classes.search}>
                <input type="text" placeholder="Search here" />
            </div>
            <ul className={classes.navbar} padding={6}>
                <li><a href="#">MV</a></li>
                <li><a href="#">Mới nhất</a></li>
                <li><a href="#">Học tiếng anh</a></li>
            </ul>
        </div>
    )
}

export default Header
