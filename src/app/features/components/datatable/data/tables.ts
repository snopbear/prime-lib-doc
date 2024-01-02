import { TableColumn } from 'assaf-prime-lib/@components/@datatable';

export const generalHeaders: Array<TableColumn> = [
  { title: 'First Name', type: 'text', dataKey: 'firstName' },
  {
    title: 'Active',
    type: 'switch',
    dataKey: 'active',
    switchConfig: { event: 'activeState' },
  },
  { title: 'Image', type: 'image', dataKey: 'image' },
  { title: 'Phone Number', type: 'text', dataKey: 'phone' },
  {
    cellStyleClass: 'flex gap-2',
    type: 'button',
    btnConfig: [
      { icon: 'pi-pencil', event: 'edit', severity: 'warning' },
      {
        icon: 'pi-trash',
        event: 'delete',
        severity: 'danger',
        class: 'delete-btn',
      },
    ],
  },
];

export const checkboxHeaders: Array<TableColumn> = [
  { type: 'checkbox' },
  { title: 'First Name', type: 'text', dataKey: 'firstName' },
  {
    title: 'Active',
    type: 'switch',
    dataKey: 'active',
    switchConfig: { event: 'activeState' },
  },
  { title: 'Image', type: 'image', dataKey: 'image' },
  { title: 'Phone Number', type: 'text', dataKey: 'phone' },
  {
    type: 'button',
    cellStyleClass: 'flex gap-2',
    btnConfig: [
      { icon: 'pi-pencil', event: 'edit', severity: 'warning' },
      {
        icon: 'pi-trash',
        event: 'delete',
        severity: 'danger',
        class: 'delete-btn',
      },
    ],
  },
];

export const sortable: Array<TableColumn> = [
  { title: 'First Name', type: 'text', dataKey: 'firstName', sortable: true },
  {
    title: 'Active',
    type: 'switch',
    dataKey: 'active',
    switchConfig: { event: 'activeState' },
  },
  { title: 'Image', type: 'image', dataKey: 'image' },
  { title: 'Phone Number', type: 'text', dataKey: 'phone', sortable: true },
  {
    cellStyleClass: 'flex gap-2',
    type: 'button',
    btnConfig: [
      { icon: 'pi-pencil', event: 'edit', severity: 'warning' },
      {
        icon: 'pi-trash',
        event: 'delete',
        severity: 'danger',
        class: 'delete-btn',
      },
    ],
  },
];

export const subHeaders: Array<TableColumn> = [
  { title: 'First Name', type: 'text', dataKey: 'firstName' },
  { title: 'Last Name', type: 'text', dataKey: 'lastName' },
  { title: 'Phone Number', type: 'text', dataKey: 'phone' },
];

export const dropdowns: Array<TableColumn> = [
  { title: 'First Name', type: 'text', dataKey: 'firstName' },
  {
    title: 'Active',
    type: 'switch',
    dataKey: 'active',
    switchConfig: { event: 'activeState' },
  },
  { title: 'Image', type: 'image', dataKey: 'image' },
  { title: 'Phone Number', type: 'text', dataKey: 'phone' },
  {
    title: 'City',
    type: 'dropdown',
    cellStyleClass: 'table-dropdown-cell',
    dataKey: 'city',
    dropDownConfig: {
      event: 'dropdown',
      placeholder: 'Select City',
      data: [
        { key: 'Cairo', value: 'cairo' },
        { key: 'France', value: 'france' },
        { key: 'Saudi Arabia', value: 'sa' },
        { key: 'UAE', value: 'uae' },
        { key: 'Germany', value: 'germany' },
      ],
    },
  },
];
