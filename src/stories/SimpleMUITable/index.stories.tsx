import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SimpleMUITable, {SimpleMUITableProps, SMTTableColumn, SMTTableRow} from '../../components/SimpleMUITable';

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

const Template: Story<SimpleMUITableProps>= (args) => <SimpleMUITable {...args}/>;

export const Simple = Template.bind({});
Simple.args = {columns, rows};


export default {
  title: 'Components/SimpleMUITable',
  component: SimpleMUITable,
} as Meta
