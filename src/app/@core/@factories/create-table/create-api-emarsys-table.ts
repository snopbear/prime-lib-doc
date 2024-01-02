import { TableColumn } from 'assaf-prime-lib/@components/@datatable/models';

export const createEmarsysEventsProperty = (): TableColumn[] => {
  return [
    {
      title: 'Event Type',
      dataKey: 'name',
      type: 'text',
      headerStyleClass:
        '!bg-[var(--primary-color)] !text-[var(--secondary-color-m)]',
    },
    {
      title: 'Interface',
      dataKey: 'value',
      type: 'text',
      headerStyleClass:
        '!bg-[var(--primary-color)] !text-[var(--secondary-color-m)]',
    },
    {
      title: 'Description',
      type: 'text',
      dataKey: 'description',
      headerStyleClass:
        '!bg-[var(--primary-color)] !text-[var(--secondary-color-m)]',
    },
    {
        title:'Placement',
        type:'text',
        dataKey:'placement',
        headerStyleClass:
        '!bg-[var(--primary-color)] !text-[var(--secondary-color-m)]',
    },
    {
        title:'Note',
        type:'text',
        dataKey:'note',
        headerStyleClass:
        '!bg-[var(--primary-color)] !text-[var(--secondary-color-m)]',
    }
  ];
};
