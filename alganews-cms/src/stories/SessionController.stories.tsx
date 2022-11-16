import React from 'react';
import { Story, Meta } from '@storybook/react';
import SessionController, { SessionControllerProps } from '../components/SessionController/SessionController';

export default {
  title: 'Example/SessionController',
  component: SessionController,
} as Meta

const Template: Story<SessionControllerProps> = (args) => <SessionController {...args} />;

export const Default = Template.bind({})
Default.args = {
  name: 'Filipe Alves',
  description: 'Desenvolvedor'  
}