import React from 'react';
import { Story, Meta } from '@storybook/react';
import TagInput, { TagInputProps } from '../components/TagInput';

export default {
  title: 'Example/TagInput',
  component: TagInput,

} as Meta;

const Template: Story<TagInputProps> = (args) =>
  <div>
    <TagInput {...args} />
  </div>

export const Default = Template.bind({})
Default.args = {
    placeholder: 'Insira as tags desse post',
    tags:[{id: '1', text: 'JavaScript'}]
}

export const VariousTags = Template.bind({})
VariousTags.args = {
    placeholder: 'Insira as tags desse post',
    tags:[
      {id: '1', text: 'JavaScript'},
      {id: '2', text: 'java'},
      {id: '3', text: 'css'},
      {id: '4', text: 'c++'},
      {id: '5', text: 'sql'},
    ]
}