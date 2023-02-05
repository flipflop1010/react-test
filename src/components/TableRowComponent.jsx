import React from 'react'
import { TableRow, TableCell, Input, Button } from '@mui/material';

const TableRowComponent = ({rowRemove,rowId}) => {
    const remove=()=>{
        rowRemove(rowId)
    }
    return (
        <>
            <TableRow>
                <TableCell>{rowId}</TableCell>
                <TableCell><Input /></TableCell>
                <TableCell><Input /></TableCell>
                <TableCell><Input /></TableCell>
                <TableCell><Input /></TableCell>
                <TableCell><Button onClick={(e)=>remove()} variant='text' >X</Button></TableCell>
            </TableRow>
        </>
    )
}

export default TableRowComponent