import React from 'react';
import { Story, Meta } from '@storybook/react';

import Paragraph, { ParagraphProps } from '../components/Typography/Paragraph';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 // argTypes: {
 //   backgroundColor: { control: 'color' },
 // },
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({})
Default.args={
    size:'default',
    children: 'Anim in id incididunt laborum Lorem ipsum mollit excepteur. Ipsum dolor est incididunt do id commodo aliqua laboris eiusmod ipsum do. Laborum aute labore quis officia laboris irure occaecat. Quis consequat proident mollit officia. Nisi non voluptate et magna Lorem do ipsum id eiusmod tempor quis qui dolore. Sint aute nisi eiusmod tempor. Irure incididunt minim pariatur duis ad officia enim id cillum exercitation enim id nisi.'
}
export const Small = Template.bind({})
Small.args={
    size: 'small',
    children: 'Id ut Lorem deserunt consectetur anim eiusmod voluptate. Officia nostrud est excepteur nulla. Ad culpa cillum tempor qui fugiat laboris magna esse veniam labore. Excepteur labore laboris aliqua consectetur sit culpa magna ullamco officia duis id qui Lorem. Consequat fugiat aute ut aliquip exercitation quis laboris eiusmod id duis aliqua est. Ad laborum labore do commodo sunt nisi sunt et fugiat dolor sunt sint magna veniam.'
}
