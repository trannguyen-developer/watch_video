import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  topProduct: {
    backgroundColor: "#171717",
    borderRadius: "4px",
  },
  title: {
    color: "#dacb46",
    fontSize: "22px",
    fontWeight: 300,
    padding: "8px",
  },
  chooseTop: {
    display: "flex",
    fontSize: "20px",
    color: "#b8babc",
    position: "relative",
    borderBottom: "1px solid #000",
    "&::before": {
      content: "''",
      display: "block",
      position: "absolute",
      width: "calc(100% - 16px)",
      height: "0.5px",
      left: "8px",
      background: "#000",
    },
    "& li": {
      textAlign: "center",
      flex: "33.33%",
      fontSize: "14px",
      padding: "8px 0",
      cursor: "pointer",
      "&$active": {
        color: "#46e1ff",
      },
    },
  },
  listProduct: {
    "& li": {
      display: "flex",
      padding: "10px",
      cursor: "pointer",
      "&:hover div p": {
        color: "#dacb46",
      },
      "& div": {
        "& a": {
          borderRadius: "4px",
          display: "block",
          paddingTop: "60%",
          width: "155px",
          background: "no-repeat center / cover",
        },
      },
      "& $nameProduct": {
        marginLeft: "15px",
        "& p": {
          fontSize: "13px",
          color: "#b8babc",
          display: "-webkit-box",
          "-webkit-line-clamp": "4",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        },
        "& span": {
          color: "#888888",
          fontSize: "12px",
        },
      },
    },
  },

  // class nested
  active: {},
  nameProduct: {},
}));
