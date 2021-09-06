import React from 'react';
import useStyles from './styles'
import Box from '@material-ui/core/Box';

const Footer = props => {
    const classes = useStyles()
    return(
        <Box component="div" className={classes.footer} >
            <p>Copyright 2021 © CompilationVD, Video Tổng hợp 2021 All rights reserved.</p>
            <p>Copyright 2021 © CompilationVD, Video Tổng hợp 2021 All rights reserved.</p>
            <p>Copyright 2021 © CompilationVD, Video Tổng hợp 2021 All rights reserved.</p>
        </Box>
    )
}

export default Footer
