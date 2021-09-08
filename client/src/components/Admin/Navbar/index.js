import React from 'react';

import classes from './styles.module.scss'

const Navbar = props => {
    return(
        <div className={classes.navbar}>
            <ul>
                <li>
                    <a href="#">Create</a>
                </li>
                <li>
                    <a href="#">Update</a>
                </li>
                <li>
                    <a href="#">Delete</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
