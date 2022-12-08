import React from 'react';
import { Story, Meta } from '@storybook/react';

import ValueDescriptor, { ValueDescriptorProps } from '../app/components/ValueDescriptor/ValueDescriptor';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 // argTypes: {
 //   backgroundColor: { control: 'color' },
 // },
} as Meta<typeof ValueDescriptor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ValueDescriptorProps> = (args) => <ValueDescriptor {...args} />;

        export const Default = Template.bind({})
        Default.args = {
        description: 'Ganhos na semana',
        value: 560322.02
        }

        export const DefaultCurrency = Template.bind({})
        DefaultCurrency.args = {
        description: 'Ganhos na semana',
        value: 560322.02,
        isCurrency: true,
        color: 'default'
        }

        export const Primary = Template.bind({})
        Primary.args = {
        description: 'Ganhos na semana',
        value: 560322.02,
        isCurrency: false,
        color: 'primary'
        }

        export const PrimaryCurrency = Template.bind({})
        PrimaryCurrency.args = {
        description: 'Ganhos na semana',
        value: 560322.02,
        isCurrency: true,
        color: 'primary'
        }