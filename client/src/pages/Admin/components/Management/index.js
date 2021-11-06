import React, { useRef, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 440,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "4px",
  p: 4,
  outlined: "none",
  border: "none",
};

const Management = (props) => {
  const data = useSelector((state) => state.allVideo);
  const [idVideo, setIdVideo] = useState();

  const form = useRef();

  const [open, setOpen] = useState(false);

  const handleOpen = (id) => {
    setOpen(true);
    setIdVideo(id);
  };

  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    form.current.action = `/api/admin/delete/${idVideo}?_method=DELETE`;
    form.current.submit();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="p-0" method="POST" onSubmit={handleSubmit} ref={form}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Date Create</TableCell>
                <TableCell>Date Update</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((child, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>{child.category}</TableCell>
                  <TableCell>{child.title}</TableCell>
                  <TableCell>{child.createAt}</TableCell>
                  <TableCell>{child.createAt}</TableCell>
                  <TableCell align="right">
                    <div className="flex justify-end">
                      <div
                        className={`${classes.btn} ${classes.delete}`}
                        onClick={() => handleOpen(child._id)}
                      >
                        Xóa
                      </div>
                      <Link
                        to={`/admin/update/${child._id}`}
                        className={`${classes.btn} ${classes.update}`}
                      >
                        Sửa
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Bạn có chắc muốn xóa video này không ?
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, textAlign: "right" }}
            >
              <button
                type="submit"
                onClick={handleDelete}
                className={`${classes.btn} ${classes.delete}`}
              >
                Xóa
              </button>
              <button
                onClick={handleClose}
                className={`${classes.btn} ${classes.update}`}
              >
                Hủy
              </button>
            </Typography>
          </Box>
        </Modal>
      </form>
    </div>
  );
};

export default Management;
