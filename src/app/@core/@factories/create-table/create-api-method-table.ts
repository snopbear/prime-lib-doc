import { TableColumn } from 'assaf-prime-lib/@components/@datatable/models';

export const createAPIMethodTable = (): TableColumn[] => {
  return [
    {
      title: 'Method Name',
      dataKey: 'name',
      type: 'text',
      cellStyleClass: 'text-[var(--primary-color-m)] font-bold',
      headerStyleClass:
        '!bg-[var(--primary-color)] !text-[var(--secondary-color-m)]',
    },
    {
      title: 'Prototype',
      type: 'text',
      dataKey: 'prototype',
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
      title: 'Parameters',
      dataKey: 'protoDesc',
      type: 'text',
      headerStyleClass:
        '!bg-[var(--primary-color)] !text-[var(--secondary-color-m)]',
    },
  ];
};
