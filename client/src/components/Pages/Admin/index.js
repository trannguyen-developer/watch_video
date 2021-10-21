import React, { useState } from "react";
import classes from "./styles.module.scss";
import { Link, NavLink, Route } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CreateProduct from "../../Admin/CreateProduct";
import Management from "../../Admin/Management";
import UpdateProduct from "../../Admin/UpdateProduct";

const Admin = (props) => {
  return (
    <div>
      {/* navbar */}
      <div className={classes.navbar}>
        <div className="text-center pb-5">
          <Link to="/">
            <img className="inline-block" src="/assets/img/logo.png" alt="" />
          </Link>
        </div>
        <div className={classes.lineHight}></div>
        <div className="flex items-end text-white py-4">
          <DashboardIcon style={{ fontSize: "34px" }} />
          <p className="ml-2 mb-0.5 leading-none font-bold">Dashboard</p>
        </div>
        <div className={classes.lineHight}></div>
        <ul>
          <NavLink
            to="/admin/create"
            className={classes.navbarItem}
            activeClassName={classes.selected}
          >
            <AddCircleOutlineIcon />
            <p>Create</p>
          </NavLink>
          <NavLink
            to="/admin/manage"
            className={classes.navbarItem}
            activeClassName={classes.selected}
          >
            <ManageAccountsIcon />
            <p>Management</p>
          </NavLink>
        </ul>
      </div>
      {/* content */}
      <div className={classes.content}>
        <Route path="/admin/create" component={CreateProduct} />
        <Route path="/admin/manage" component={Management} />
        <Route path="/admin/update/:idUpdate" component={UpdateProduct} />
      </div>
    </div>
  );
};

export default Admin;
