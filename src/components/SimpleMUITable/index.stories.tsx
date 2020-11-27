import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import EnhancedMUITable, {EnhancedMUITableProps} from '.';
import { EMTTableColumn, EMTTableRow } from './types';

export default {
  title: 'Components/EnhancedMUITable',
  component: EnhancedMUITable,
} as Meta

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

const Template: Story<EnhancedMUITableProps>= (args) => <EnhancedMUITable {...args}/>;

export const SimpleTable = Template.bind({});
SimpleTable.args = {
  columns,
  rows,
  checkboxProperties :{
    active: true,
    allSelected: false
  },
  search: true
};


