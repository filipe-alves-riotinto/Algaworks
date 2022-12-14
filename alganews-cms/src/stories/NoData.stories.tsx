import { Story, Meta } from '@storybook/react';
import NoData, { NoDataProps } from '../app/components/NoData/NoData';

export default {
  title: 'Example/NoData',
  component: NoData,
  argTypes: {
    onNoData: { action: 'NoData' },
    onCancel: { action: 'cancel' },
  },
} as Meta <typeof NoData>;

const Template: Story<NoDataProps> = (args) => <NoData {...args} />;

export const Default = Template.bind({})
Default.args = {

}

export const FixedHeight = Template.bind({})
FixedHeight.args = {
  height: 240
}