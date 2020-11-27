import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import EMTTableToolbar, { EMTTableToolbarProps } from './EMTTableToolbar';

export default {
  title: 'Components/EMTTableToolbar',
  component: EMTTableToolbar,
} as Meta

const Template: Story<EMTTableToolbarProps>= (args) => <EMTTableToolbar {...args}/>;

export const WithSearch = Template.bind({});
WithSearch.args = {
  search: true
};

export const WithDeleteAction = Template.bind({});
WithDeleteAction.args = {
  action: 'delete'
};

export const WithDownloadAction = Template.bind({});
WithDownloadAction.args = {
  action: 'download'
};


