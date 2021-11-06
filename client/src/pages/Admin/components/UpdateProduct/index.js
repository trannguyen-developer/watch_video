import React, { useEffect, useState } from "react";
import { TextField, TextareaAutosize } from "@material-ui/core";
import classes from "./styles.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const styleContent = {
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const UpdateProduct = (props) => {
  const { idUpdate } = useParams();

  const [valueTitle, setValueTitle] = useState("");
  const [valueDesc, setValueDesc] = useState("");
  const [valueIdVideo, setValueIdVideo] = useState("");
  const [valueCategory, setValueCategory] = useState("");

  const handleChangeTitle = (e) => {
    setValueTitle(e.target.value);
  };
  const handleChangeDesc = (e) => {
    setValueDesc(e.target.value);
  };
  const handleChangeIdVideo = (e) => {
    setValueIdVideo(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setValueCategory(e.target.value);
  };

  useEffect(() => {
    async function getDataVideo() {
      axios.get(`/api/video/${idUpdate}`).then((response) => {
        setValueTitle(response.data[0].title);
        setValueDesc(response.data[0].description);
        setValueIdVideo(response.data[0].idVideo);
        setValueCategory(response.data[0].category);
      });
    }
    getDataVideo();
  }, [idUpdate]);

  return (
    <div>
      <form action="/api/admin/update?_method=PATCH" method="POST">
        <TextField
          label="Nhập tiêu đề"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          value={valueTitle}
          name="title"
          onChange={handleChangeTitle}
        />
        <TextareaAutosize
          className={`${classes.textField} p-2`}
          style={styleContent}
          aria-label="empty textarea"
          name="description"
          minRows={2}
          placeholder="Nhập nội dung"
          value={valueDesc}
          onChange={handleChangeDesc}
        />
        <TextField
          label="Nhập id video"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          name="idVD"
          value={valueIdVideo}
          onChange={handleChangeIdVideo}
        />
        <TextField
          label="Nhập thể loại"
          id="outlined-margin-dense"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          name="category"
          value={valueCategory}
          onChange={handleChangeCategory}
        />
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
