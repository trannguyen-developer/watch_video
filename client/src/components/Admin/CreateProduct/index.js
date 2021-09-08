import React from 'react';
import { TextField, TextareaAutosize } from '@material-ui/core';
import classes from './styles.module.scss'

const CreateProduct = props => {
    return(
        <div className={`${classes['create-admin']} ${props.className}`}>
            <form action="/api/admin/create" method="GET">
                <TextField
                label="Nhập tiêu đề"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                name="title"
                />
                <TextareaAutosize aria-label="empty textarea" name="description" minRows={2} style={{padding: '8px'}} placeholder="Nhập nội dung" className={classes.textField} />
                <TextField
                label="Nhập id video"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                name="idVD"
                />
                <TextField
                label="Nhập thể loại"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                name="category"
                />
                <button type="submit">Nhập</button>
            </form>
        </div>
    )
}

export default CreateProduct
