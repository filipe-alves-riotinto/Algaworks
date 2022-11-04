import React from 'react';
import { Story, Meta } from '@storybook/react';

import FieldDescriptor, { FieldDescriptorProps } from '../components/FieldDescriptor/FieldDescriptor';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/FieldDescriptor',
  component: FieldDescriptor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 // argTypes: {
 //   backgroundColor: { control: 'color' },
 // },
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<FieldDescriptorProps> = (args) => <FieldDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
  field: 'Data de nascimento',
  value: '26 de Dezembro de 1997 (22 anos)'
}