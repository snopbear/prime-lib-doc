import { createTableProperty } from '@factories/index';
import { TableProperty } from '@models/interfaces';

export const datatableEvents: TableProperty[] = [
  createTableProperty(
    'stateChange',
    'State',
    'Event triggered whenever any statefulcomponent is clicked'
  ),
  createTableProperty(
    'customSort',
    'SortEvent',
    'Event triggered to support external sorting'
  ),
  createTableProperty(
    'selectionChange',
    'any[ ]',
    'Event triggered when row is selected using checkbox'
  ),
  createTableProperty('rowClick', 'any', 'Event triggered if row gets clicked'),
  createTableProperty(
    'onLazyLoad',
    'LazyLoadAction',
    'Event triggered when lazy loading is activated'
  ),
];
