import React, { useMemo } from 'react';
import { Meta } from '@storybook/react';

import Table from '../components/Table/Table';
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';
import { Column, useTable } from 'react-table';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Table',
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 // argTypes: {
 //   backgroundColor: { control: 'color' },
 // },
} as Meta

type Data = {
  preview: React.ReactNode
  col1: string
  col2: string
  actions: string
}

export function Default () {
  const data = useMemo<Data[]>(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
        actions: 'ações',
        preview: <Icon
          size="14px"
          color ="#09f"
          path={mdiOpenInNew}
        />
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        actions: 'ações',
        preview: <Icon
          size="14px"
          color ="#09f"
          path={mdiOpenInNew}
        />
      },
      {
        col1: 'whatever',
        col2: 'you want',
        actions: 'ações',
        preview: <Icon
          size="14px"
          color ="#09f"
          path={mdiOpenInNew}
        />
      },
      {
        col1: 'Batata',
        col2: 'Banana',
        actions: 'ações',
        preview: <Icon
          size="14px"
          color ="#09f"
          path={mdiOpenInNew}
        />
      },
    ],
    []
  )

const columns = useMemo<Column<Data>[]>(
  () => [
    {
      Header: '',
      accessor: 'preview', // accessor is the "key" in the data
    },
    {
      Header: 'Column 1',
      accessor: 'col1',
      width: 320,
      Cell: (row) => <div style={{ textAlign: 'right'}}> {row.value} </div>          
    },
    {
      Header: 'Column 2',
      accessor: 'col2',
      Cell: (row) => <div style={{ textAlign: 'center'}}> {row.value} </div>          
    },
    {
      Header: 'Column 3',
      accessor: 'actions',
    },
    ],
   []
  )

  const instance = useTable<Data>({ data, columns })

  return <Table<Data> instance={instance}/>
}

export function NoData () {
  const data = useMemo<Data[]>(
    () => [    ],
    []
  )

const columns = useMemo<Column<Data>[]>(
  () => [
    {
      Header: '',
      accessor: 'preview', // accessor is the "key" in the data
    },
    {
      Header: 'Column 1',
      accessor: 'col1',
      width: 320,
      Cell: (row) => <div style={{ textAlign: 'right'}}> {row.value} </div>          
    },
    {
      Header: 'Column 2',
      accessor: 'col2',
      Cell: (row) => <div style={{ textAlign: 'center'}}> {row.value} </div>          
    },
    {
      Header: 'Column 3',
      accessor: 'actions',
    },
    ],
   []
  )

  const instance = useTable<Data>({ data, columns })

  return <Table<Data> instance={instance}/>
}
