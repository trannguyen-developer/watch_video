import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    "& li": {
      padding: "0 16px",
      "&:last-child": {
        paddingRight: 0,
        color: "red",
        "& a": {
          fontSize: 17,
          "&:hover": {
            color: "#D40000",
          },
        },
      },
      "& a": {
        textDecoration: "none",
        color: "inherit",
        fontSize: "13px",
        fontWeight: 700,
        "&:hover": {
          color: "#ffffff",
        },
      },
    },
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <ul className={`${classes.navbar} ${props.className}`}>
      <li>
        <Link to="#">MV</Link>
      </li>
      <li>
        <Link to="#">Mới nhất</Link>
      </li>
      <li>
        <Link to="#">Learn</Link>
      </li>
      <li>
        <Link to="#">English</Link>
      </li>
      <li>
        <Link to={"/admin/create"}>Admin</Link>
      </li>
    </ul>
  );
};

export default Navbar;
