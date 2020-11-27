import React from 'react';
import { render } from 'react-dom';
import SimpleMUITable, { SMTTableColumn, SMTTableRow } from './components/SimpleMUITable';

function App() {
  const columns: SMTTableColumn[] = [
    {
      id: 'country',
      name: 'Country'
    },
    {
      id: 'capital',
      name: 'Capital'
    }
  ];

  const rows: SMTTableRow[] = [
    {
      id: '1',
      entityId: '1',
      cells: new Map([
        ['country', {column: 'country', content:'Kenya'}],
        ['capital', {column: 'capital', content:'Nairobi'}],
      ])
    },
    {
      id: '2',
      entityId: '2',
      cells: new Map([
        ['country', {column: 'country', content:'Uganda'}],
        ['capital', {column: 'capital', content:'Kampala'}],
      ])
    }
  ];
  return (
    <div>
      <SimpleMUITable columns={columns} rows={rows}/>
    </div>
  );
}

render(<App/>, document.getElementById('root'));