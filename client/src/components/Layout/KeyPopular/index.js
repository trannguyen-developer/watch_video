import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles'
import { Link } from 'react-router-dom';

const KeyPopular = props => {
    const classes = useStyles()
    return(
        <div className={classes.keyPopular} style={props.style}>
            <Typography className={classes.title}>
                Từ khóa nổi bật
            </Typography>
            <div className={classes.tagName}>
                <Link to="/test">
                    <p>Ca nhạc</p>
                </Link>
                <Link to="/test">
                    <p>Học english</p>
                </Link>
                <Link to="/test">
                    <p>Học english</p>
                </Link>
                <Link to="/test">
                    <p>Học english</p>
                </Link>
                <Link to="/test">
                    <p>Học english</p>
                </Link>
            </div>
        </div>
    )
}

export default KeyPopular
