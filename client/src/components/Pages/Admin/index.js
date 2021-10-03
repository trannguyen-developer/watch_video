import React, { useState } from 'react';
import classes from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CreateProduct from '../../Admin/CreateProduct'
import Management from '../../Admin/Management'

const create = (
    <span>
        <AddCircleOutlineIcon/>
        <p>Create</p>
    </span>
)

const update = (
    <span>
        <ManageAccountsIcon/>
        <p>Management</p>
    </span>
)

const Admin = props => {

    const [indexActive, setIndexActive] = useState(0)

    const handleClickActive = (index) => {
        setIndexActive(index)
    }

    const listNavbar = [create, update, 'Delete']
    
    const renderList  = listNavbar.map((child, index) => (
        <li className={indexActive === index && classes.active} onClick={()=>handleClickActive(index)} key={index}>
            {child}
        </li>
    ))
    
    return(
        <div>
            {/* navbar */}
            <div className={classes.navbar}>
                <div className="text-center pb-5">
                    <img className="inline-block" src="/assets/img/logo.png" alt="" />
                </div>
                <div className={classes.lineHight}></div>
                <div className="flex items-end text-white py-4">
                    <DashboardIcon style={{fontSize: '34px'}} />
                    <p className="ml-2 mb-0.5 leading-none font-bold">Dashboard</p>
                </div>
                <div className={classes.lineHight}></div>
                <ul>
                    {renderList}
                </ul>
            </div>
            {/* content */}
            <div className={classes.content}>
                {indexActive === 0 && <CreateProduct />}
                {indexActive === 1 && <Management />}
            </div>
        </div>
    )
}

export default Admin
