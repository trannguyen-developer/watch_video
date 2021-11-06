import React from "react";
import classes from "./styles.module.scss";
import { Route } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import Management from "./components/Management";
import UpdateProduct from "./components/UpdateProduct";
import Navbar from "./components/Navbar";

const Admin = (props) => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* content */}
      <div className={classes.content}>
        <Route exact path="/admin" component={CreateProduct} />
        <Route path="/admin/manage" component={Management} />
        <Route path="/admin/update/:idUpdate" component={UpdateProduct} />
      </div>
    </div>
  );
};

export default Admin;
