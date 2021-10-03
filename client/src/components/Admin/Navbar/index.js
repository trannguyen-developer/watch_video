import React from 'react';

import classes from './styles.module.scss'
import { Link, NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Navbar = props => {
    return(
        <div className={classes.navbar}>
            <div className="text-center pb-5">
                <img className="inline-block" src="/assets/img/logo.png" alt="" />
            </div>
            <div className={classes.lineHight}></div>
            <div className="flex items-end text-white py-4">
                <DashboardIcon style={{fontSize: '34px'}} />
                <p className="ml-2 mb-0.5 leading-none font-bold">Dashboard</p>
            </div>
            <div className={classes.lineHight}></div>
            <ul>
                <li>
                    <NavLink to="/admin/create">Create</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/update">Update</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/delete">Delete</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
