import { Story, Meta } from '@storybook/react';
import Chart, { ChartProps } from '../app/components/Chart/Chart';

const data: Chart.ChartData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Receitas',
      data: [600, 300, 400, 100, 800, 200],
      fill: true,
      backgroundColor: '#0099ff',
      borderColor: '#0099ff',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
    {
      label: 'Despesas',
      data: [500, 400, 600, 100, 800, 20],
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#274060',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
  ],
};

export default {
  title: 'Example/Chart',
  component: Chart,

} as Meta <typeof Chart>;

const Template: Story<ChartProps> = (args) => <Chart {...args} />;

export const Default = Template.bind({})
Default.args = {
  title: 'Média de performance nos últimos 6 meses',
  data
}

export const WithoutData = Template.bind({})
WithoutData.args = {
  title: 'Média de performance nos últimos 12 meses',
}