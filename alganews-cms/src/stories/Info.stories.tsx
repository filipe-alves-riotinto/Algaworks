import React from 'react';
import { Story, Meta } from '@storybook/react';

import Info, { InfoProps } from '../components/Info/Info';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Info',
  component: Info,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 // argTypes: {
 //   backgroundColor: { control: 'color' },
 // },
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<InfoProps> = (args) => <Info {...args} />;

export const Default = Template.bind({})
Default.args = {
  title: 'Post não encontrado',
  description: 'Officia ea adipisicing do aliquip enim cillum incididunt.'
}