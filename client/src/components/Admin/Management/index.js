import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
  
const Management = props => {

    const data = useSelector(state => state.allVideo)

    console.log(data);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>STT</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Date Create</TableCell>
                        <TableCell align="right">Date Update</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((child, index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {index + 1}
                        </TableCell>
                        <TableCell>{child.title}</TableCell>
                        <TableCell>{child.title}</TableCell>
                        <TableCell>{child.title}</TableCell>
                        <TableCell align="right">{child.title}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Management;
