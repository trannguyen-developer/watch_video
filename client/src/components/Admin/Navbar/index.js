import React from 'react';

import classes from './styles.module.scss'
import { Link } from 'react-router-dom'

const Navbar = props => {
    return(
        <div className={classes.navbar}>
            <ul>
                <li>
                    <Link to="#">Create</Link>
                </li>
                <li>
                    <Link to="#">Update</Link>
                </li>
                <li>
                    <Link to="#">Delete</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
