import { Button, Grid, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import TableRowComponent from '../components/TableRowComponent';

const TablePage = () => {

    const [rows,setRows]=React.useState([])

const rowAdd=(e)=>{
    // console.log('e',e);
    setRows([...rows,{component:<TableRowComponent rowRemove={rowRemove} key={rows.length+1} rowId={rows.length+1} />,key:rows.length+1}])

    console.log('rows',rows);

}
const rowRemove=(rowId)=>{
    console.log('rowId',rowId);
    let r=[...rows]
    r=r.filter(row=>row.rowId!==rowId)
    console.log('filter r',r);
    setRows(r)
}




    return (
        <>
            <Grid container>
            
            </Grid>
            <Grid container >
                <Grid item xs={2} />
                <Grid item xs={8} >
                <Button variant='contained' onClick={(e)=>rowAdd(e)}>Add</Button>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Sl.No.</TableCell>
                                    <TableCell >Name</TableCell>
                                    <TableCell >Roll</TableCell>
                                    <TableCell >Class</TableCell>
                                    <TableCell >Section</TableCell>
                                    <TableCell >Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows && rows.map(row=>row.component)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

        </>
    )
}

export default TablePage