import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles'

const KeyPopular = props => {
    const classes = useStyles()
    return(
        <div className={classes.keyPopular} style={props.style}>
            <Typography className={classes.title}>
                Từ khóa nổi bật
            </Typography>
            <div className={classes.tagName}>
                <a href="#">
                    <p>Ca nhạc</p>
                </a>
                <a href="#">
                    <p>Học english</p>
                </a>
                <a href="#">
                    <p>Học english</p>
                </a>
                <a href="#">
                    <p>Học english</p>
                </a>
                <a href="#">
                    <p>Học english</p>
                </a>
            </div>
        </div>
    )
}

export default KeyPopular
