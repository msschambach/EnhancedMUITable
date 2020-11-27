import React, { useState, ChangeEvent } from 'react';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Checkbox } from '@material-ui/core';
import { EMTTableColumn, EMTTableRow, EMTCheckboxProperties } from './types';
import EMTTableBodyRow from './EMTTableBodyRow';
import EMTTableToolbar from './EMTTableToolbar';

export interface EnhancedMUITableProps {
  columns: EMTTableColumn[],
  rows: EMTTableRow[],
  checkboxProperties?: EMTCheckboxProperties,
  search?: boolean,
  edit?: boolean
}


const EnhancedMUITable: React.FC<EnhancedMUITableProps> =  ({
  columns,
  rows,
  checkboxProperties,
  search = false,
}) => {

  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  if(selectAll && (selectedRows.length !== rows.length)) {
    setSelectAll(false);
  }

  const handleBodyRowCheckboxChange = (rowId: string) => {
    if(selectedRows.includes(rowId)) {
      const selected = [...selectedRows];
      selected.splice(selected.indexOf(rowId), 1);
      setSelectedRows([...selected]);
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  const handleHeaderRowCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(selectAll) {
      setSelectedRows([]);
      setSelectAll(false);
    } else if(selectedRows.length === rows.length) {
      // This means all have been selected manually
      setSelectedRows([]);
      setSelectAll(false);
    } else {
      setSelectAll(true);
      setSelectedRows(rows.map(row => row.id));
    }
  };

  return (
    <TableContainer component={Paper}>
      <EMTTableToolbar search={search} />
      <Table stickyHeader aria-label="table">
        <TableHead>
          <TableRow>
            {checkboxProperties?.active && (
              <TableCell padding="checkbox">
                <Checkbox
                  onChange={handleHeaderRowCheckboxChange}
                  disabled={false}
                  checked={selectAll || (selectedRows.length === rows.length)}
                  indeterminate={selectedRows.length > 0 && !(selectedRows.length === rows.length)}
                />
              </TableCell>
            )}
            {columns.map(column => (
              <TableCell variant='head' key={column.id}>
                {column.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <EMTTableBodyRow columns={columns} row={row} checkboxProperties={{
              active: checkboxProperties?.active || false,
              selected: selectAll || selectedRows.includes(row.id),
              onChange: handleBodyRowCheckboxChange
            }}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EnhancedMUITable;