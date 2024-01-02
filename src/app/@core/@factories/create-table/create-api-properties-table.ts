import { TableColumn } from 'assaf-prime-lib/@components/@datatable/models';
export const createAPIPropertiesTable = (): TableColumn[] => {
  return [
    {
      title: 'Property Name',
      dataKey: 'name',
      type: 'text',
      cellStyleClass: 'text-[var(--secondary-color-m-m)] font-bold',
      headerStyleClass:
        '!bg-[var(--primary-color)] !text-[var(--secondary-color-m)]',
    },
    {
      title: 'Type',
      dataKey: 'type',
      type: 'text',
      headerStyleClass:
        '!bg-[var(--primary-color)] !text-[var(--secondary-color-m)]',
    },
    {
      title: 'Default Value',
      type: 'text',
      dataKey: 'defaultValue',
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
  ];
};
