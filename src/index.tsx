import React from 'react';
import { render } from 'react-dom';
import EnhancedMUITable from './components/SimpleMUITable';
import  { EMTTableColumn, EMTTableRow } from './components/SimpleMUITable/types';

function App() {
  const columns: EMTTableColumn[] = [
    {
      id: 'country',
      name: 'Country'
    },
    {
      id: 'capital',
      name: 'Capital'
    }
  ];

  const rows: EMTTableRow[] = [
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
      <EnhancedMUITable columns={columns} rows={rows}/>
    </div>
  );
}

render(<App/>, document.getElementById('root'));