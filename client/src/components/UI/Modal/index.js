import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../ComponentsChild/Navbar'

const useStyles = makeStyles({
        overflay: {
            display: props => props.isShowNavbarMobile ? 'block' : 'none',
            position: 'fixed',
            left: '0',
            right: '0',
            bottom: '0',
            height: 'calc(100vh - 50px)',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            zIndex: '10',
        },
        navbarMobile: {
            position: 'fixed',
            backgroundColor: '#000000',
            width: '300px',
            left: '0',
            bottom: '0',
            height: 'calc(100vh - 50px)',
            zIndex: '10',
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid #444',
            transition: 'transform 0.3s linear',
            transform: props => props.isShowNavbarMobile ? 'translateX(0%)' : 'translateX(-100%)',
            '& li': {
                padding: '0',
                margin: '0 30px',
                '& a': {
                    display: 'block',
                    borderBottom: '1px solid #444',
                    padding: '10px 0',
                    fontSize: '17px',
                    color: '#dddddd',
                    fontWeight: 'normal',
                }
            }
        }
})

const Modal = props => {
    const classes = useStyles(props)
    return(
        <div className={classes.modal}>
            <div className={classes.overflay} onClick={props.onClickHideNavbarMobile}></div>
            <Navbar className={classes.navbarMobile} />
        </div>
    )
}

export default Modal
