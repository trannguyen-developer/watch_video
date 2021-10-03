import React from 'react';
import useStyles from './styles'
import Box from '@material-ui/core/Box';
import {Container } from '@material-ui/core';


const Footer = props => {
    const classes = useStyles()
    return(
        <footer style={{marginTop: '40px'}}>
			<Container className="container" fixed maxWidth='lg'>
                <Box component="div" className={classes.footer} >
                    <p>Copyright 2021 © CompilationVD, Video Tổng hợp 2021 All rights reserved.</p>
                    <p>Copyright 2021 © CompilationVD, Video Tổng hợp 2021 All rights reserved.</p>
                    <p>Copyright 2021 © CompilationVD, Video Tổng hợp 2021 All rights reserved.</p>
                </Box>
			</Container>
		</footer>
        
    )
}

export default Footer
