import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Checkbox } from '@material-ui/core';
import { EMTCheckboxProperties, EMTTableColumn, EMTTableRow } from './types';

interface EMTTableBodyRowProps {
  columns: EMTTableColumn[],
  row: EMTTableRow,
  checkboxProperties: EMTCheckboxProperties
}

const EMTTableBodyRow: React.FC<EMTTableBodyRowProps> = ({
  columns,
  row,
  checkboxProperties
}) => {

  const handleCheckboxOnChange = () => {
    if(checkboxProperties.onChange) {
      checkboxProperties.onChange(row.id);
    }
  }

  return (
    <TableRow key={row.id}>
      {checkboxProperties?.active && (
          <TableCell padding="checkbox">
            <Checkbox onChange={handleCheckboxOnChange} checked={checkboxProperties.selected}/>
          </TableCell>
      )}
      {columns.map(column => (
        <TableCell variant="body" key={column.id}>
          {row.cells.get(column.id)?.content}
        </TableCell>
      ))}
  </TableRow>
  )
};


export default EMTTableBodyRow;