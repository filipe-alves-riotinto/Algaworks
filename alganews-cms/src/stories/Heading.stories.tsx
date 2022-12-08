import React from 'react';
import { Story, Meta } from '@storybook/react';

import Heading, { HeadingProps } from '../app/components/Typography/Heading';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Heading',
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 // argTypes: {
 //   backgroundColor: { control: 'color' },
 // },
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({})
Heading1.args={
    level: 1,
    children: 'Heading 1'
}
export const Heading2 = Template.bind({})
Heading2.args={
    level: 2,
    children: 'Heading 2'
}
export const Heading3 = Template.bind({})
Heading3.args={
    level: 3,
    children: 'Heading 3'
}