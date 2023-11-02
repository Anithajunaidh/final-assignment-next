// components/DataTable.tsx
import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

interface DataTableProps {
  data: any[]; // Replace with your data structure
  actions: { label: string; onClick: (id: number) => void }[];
  tableColumns: { title: string; field: string }[];
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  actions,
  tableColumns,
}) => {
  if (!data || data.length === 0) {
    return <div>No data to display.</div>;
  }

  const columns = tableColumns.map((column) => column.field);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when changing rows per page
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableColumns.map((column, index) => (
                <TableCell key={index}>{column.title}</TableCell>
              ))}
              {actions.length > 0 && <TableCell>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((key) => (
                    <TableCell key={key}>{item[key]}</TableCell>
                  ))}
                  <TableCell>
                    {actions.map((action, actionIndex) => (
                      <Button
                        key={actionIndex}
                        onClick={() => action.onClick(item.id)}
                      >
                        {action.label}
                      </Button>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={tableColumns.length + 1} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]} // Customize as needed
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default React.memo(DataTable);
