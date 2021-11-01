import React from "react";
import { TextField, TextareaAutosize } from "@material-ui/core";
import classes from "./styles.module.scss";

const styleContent = {
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const CreateProduct = (props) => {
  return (
    <div>
      <form action="/api/admin/create" method="POST">
        <TextField
          label="Nhập tiêu đề"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          name="title"
        />
        <TextareaAutosize
          className={`${classes.textField} p-2`}
          style={styleContent}
          aria-label="empty textarea"
          name="description"
          minRows={2}
          placeholder="Nhập nội dung"
        />
        <TextField
          label="Nhập id video"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          name="idVideo"
        />
        <TextField
          label="Nhập thể loại"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          name="category"
        />
        <button type="submit">Tạo mới</button>
      </form>
    </div>
  );
};

export default CreateProduct;
