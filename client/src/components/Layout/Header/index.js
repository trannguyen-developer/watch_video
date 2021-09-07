import React, {Fragment, useState} from 'react';
import { Box, useMediaQuery  } from '@material-ui/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {Search, List, Close} from '@material-ui/icons';
import Navbar from '../../ComponentsChild/Navbar'
import Modal from '../../UI/Modal'
import classes from './style.module.scss'

const Header = () => {
    const [isShowNavbarMobile, setIsShowNavbarMobile] = useState(false)

    const handleClickNavbarIcon = () => {
        setIsShowNavbarMobile(true)
    }

    const handleClickCloseNavbar = () => {
        setIsShowNavbarMobile(false)
    }

    const handleClickHideNavbarMobile = () => {
        setIsShowNavbarMobile(false)
    }
    
    const matches900 = useMediaQuery('(max-width:900px)');
    
    const iconNavbar = !isShowNavbarMobile ? <List onClick={handleClickNavbarIcon} style={{cursor: 'pointer'}}/> : <Close onClick={handleClickCloseNavbar} style={{cursor: 'pointer'}}/>
    return (
        <div className={classes.header}>
            {matches900 && iconNavbar}
            <Box className={classes.logo}>
                <Link to={'/'}>
                    <img height="35px" src="assets/img/logo.png" alt="logo" />
                </Link>
                <Modal isShowNavbarMobile={isShowNavbarMobile} onClickHideNavbarMobile={handleClickHideNavbarMobile}/>
            </Box>
            <div className={classes.search}>
                <input type="text" placeholder="Search here" />
                <div className={classes['search-icon']}>
                    <Search/>
                </div>
            </div>
            {!matches900 && <Navbar/> }
        </div>
    )
}

export default Header
