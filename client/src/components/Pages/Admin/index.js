import React from 'react';
import Navbar from '../../Admin/Navbar'
import CreateProduct from '../../Admin/CreateProduct'
import { makeStyles } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const useStyles = makeStyles({
    content: {
        marginLeft: '240px',
    }
})

const Admin = props => {
    const classes = useStyles()
    return(
        <div>
            <Navbar />
            <CreateProduct className={classes.content}/>
        </div>
    )
}

export default Admin
