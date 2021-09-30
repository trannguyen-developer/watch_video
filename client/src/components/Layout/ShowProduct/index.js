import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles.js'
import { Link } from 'react-router-dom';

const ShowProduct = props => {
    const classes = useStyles();
    return (
        <div style={props.style} className={classes.showProduct}>
            <Typography className={classes.title} >
                MV ca nhạc
            </Typography>
            <Grid container p={3} spacing={2}>
                <Grid item xs={6} md={4}>
                    <div className={classes.productItem}>
                        <Link to="/test" style={{backgroundImage: 'url(https://i.ytimg.com/vi/CShWpR1A13Y/hq720.jpg)'}}></Link>
                        <p>Eminem - Not Afraid (Official Video)</p>
                    </div>
                </Grid>
                <Grid item xs={6} md={4}>
                    <div className={classes.productItem}>
                        <Link to="/test" style={{backgroundImage: 'url(https://i.ytimg.com/vi/CShWpR1A13Y/hq720.jpg)'}}></Link>
                        <p>SOFAR - BINZ DA POET | OFFICIAL MUSIC VIDEO</p>
                    </div>
                </Grid>
                <Grid item xs={6} md={4}>
                    <div className={classes.productItem}>
                        <Link to="/test" style={{backgroundImage: 'url(https://i.ytimg.com/vi/CShWpR1A13Y/hq720.jpg)'}}></Link>
                        <p>SOFAR - BINZ DA POET | OFFICIAL MUSIC VIDEO</p>
                    </div>
                </Grid>
                <Grid item xs={6} md={4}>
                    <div className={classes.productItem}>
                        <Link to="/test" style={{backgroundImage: 'url(https://i.ytimg.com/vi/CShWpR1A13Y/hq720.jpg)'}}></Link>
                        <p>SOFAR - BINZ DA POET | OFFICIAL MUSIC VIDEO</p>
                    </div>
                </Grid>
                <Grid item xs={6} md={4}>
                    <div className={classes.productItem}>
                        <Link to="/test" style={{backgroundImage: 'url(https://i.ytimg.com/vi/CShWpR1A13Y/hq720.jpg)'}}></Link>
                        <p>SOFAR - BINZ DA POET | OFFICIAL MUSIC VIDEO</p>
                    </div>
                </Grid>
                <Grid item xs={6} md={4}>
                    <div className={classes.productItem}>
                        <Link to="/test" style={{backgroundImage: 'url(https://i.ytimg.com/vi/CShWpR1A13Y/hq720.jpg)'}}></Link>
                        <p>SOFAR - BINZ DA POET | OFFICIAL MUSIC VIDEO</p>
                    </div>
                </Grid>
            </Grid>
        </div>
        
    )
}

export default ShowProduct
