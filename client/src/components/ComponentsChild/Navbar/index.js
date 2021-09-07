import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    navbar: {
        display: 'flex',
        '& li': {
            padding: '0 16px',
            '&:last-child': {
                paddingRight: 0,
            },
            '& a': {
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '13px',
                fontWeight: 700,
                '&:hover': {
                    color: '#ffffff',
                }
            }
        }
    }
})

const Navbar = props => {
    const classes = useStyles();
    return (
        <ul className={`${classes.navbar} ${props.className}`}>
            <li><a href="#">MV</a></li>
            <li><a href="#">Mới nhất</a></li>
            <li><a href="#">Learn</a></li>
            <li><a href="#">English</a></li>
        </ul>
    )
}

export default Navbar
