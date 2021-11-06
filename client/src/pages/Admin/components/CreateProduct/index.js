import React from "react";
import { TextField, TextareaAutosize } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import classes from "./styles.module.scss";

const styleContent = {
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const CreateProduct = (props) => {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <form
        onSubmit={() => alert("Create video successfully!")}
        action="/api/admin/create"
        method="POST"
      >
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
        <div className="text-left mb-6">
          <FormControl sx={{ width: 200 }}>
            <InputLabel id="demo-simple-select-label">
              <div className={classes["category-lable"]}>Thể loại</div>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Age"
              onChange={handleChange}
              name="category"
            >
              <MenuItem value="Music">Music</MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Funny">Funny</MenuItem>
            </Select>
          </FormControl>
        </div>
        <button type="submit">Tạo mới</button>
      </form>
    </div>
  );
};

export default CreateProduct;
