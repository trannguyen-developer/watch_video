import React, { useState } from 'react';
import { Box, useMediaQuery  } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {Search, List, Close} from '@material-ui/icons';
import {Container, Grid } from '@material-ui/core';
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
        <header>
            <Container fixed maxWidth='lg'>
                <div className={classes.header}>
                {matches900 && iconNavbar}
                <Box className={classes.logo}>
                    <Link to="/">
                        <img src="/assets/img/logo.png" alt="logo" />
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
            </Container>
        </header>
    )
}

export default Header
