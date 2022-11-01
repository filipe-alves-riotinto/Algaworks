import { Story, Meta } from '@storybook/react';

import Input, { InputProps } from '../components/Input/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 // argTypes: {
 //   backgroundColor: { control: 'color' },
 // },
} as Meta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<typeof Input> = (args) => <Input {...args} />;

export const WithPlaceholder = Template.bind({})
    WithPlaceholder.args = {
        placeholder: 'filipe'
}

export const WithLabelAndPlaceholder = Template.bind({})
    WithLabelAndPlaceholder.args = {
        label:'Name:',
        placeholder: 'filipe'
}

export const WithLabelAndContent = Template.bind({})
    WithLabelAndContent.args = {
        label:'Name:',
        placeholder: 'filipe',
        value: 'Jon Doe'
}

export const WithContent = Template.bind({})
    WithContent.args = {
        value: 'Jon Doe'
}