import React from 'react';
import { Story, Meta } from '@storybook/react';
import SessionController, { SessionControllerProps } from '../app/components/SessionController';

export default {
  title: 'Example/SessionController',
  component: SessionController,
  argTypes: {
    onLogout: {
      action: 'logout'
    }
  }
} as Meta;

const Template: Story<SessionControllerProps> = (args) =>
  <div>
    <SessionController {...args} />
  </div>

export const Default = Template.bind({})
Default.args = {
  name: 'Filipe Riotinto',
  description: 'editor ha muito tempo'
}