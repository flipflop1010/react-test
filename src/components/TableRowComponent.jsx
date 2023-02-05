import React from "react";
import { TableRow, TableCell, Input, Button } from "@mui/material";

const TableRowComponent = (props) => {
  const { rowRemove, rowId, row, hadleChangeInput } = props;

  return (
    <>
      <TableRow>
        <TableCell>{rowId + 1}</TableCell>
        <TableCell>
          <Input name="name" value={row?.name} onChange={hadleChangeInput} />
        </TableCell>
        <TableCell>
          <Input name="roll" value={row?.roll} onChange={hadleChangeInput} />
        </TableCell>
        <TableCell>
          <Input
            name="class_"
            value={row?.class_}
            onChange={hadleChangeInput}
          />
        </TableCell>
        <TableCell>
          <Input
            name="section"
            value={row?.section}
            onChange={hadleChangeInput}
          />
        </TableCell>
        <TableCell>
          <Button onClick={(e) => rowRemove(rowId)} variant="text">
            X
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TableRowComponent;
