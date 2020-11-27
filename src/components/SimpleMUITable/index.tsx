import React from 'react';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export interface SMTTableColumn {
  id: string,
  name: string
}

export interface SMTTableRowCell {
  column: string,
  content: string
}

export interface SMTTableRow {
  id: string,
  entityId: string,
  cells: Map<string, SMTTableRowCell>
}

export interface SimpleMUITableProps {
  columns: SMTTableColumn[],
  rows: SMTTableRow[]
}


const SimpleMUITable: React.FC<SimpleMUITableProps> =  ({columns, rows}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell variant='head' key={column.id}>
                {column.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
                {columns.map(column => (
                  <TableCell variant="body" key={column.id}>
                    {row.cells.get(column.id)?.content}
                  </TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleMUITable;