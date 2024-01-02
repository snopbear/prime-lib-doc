import { createTableProperty } from '@factories/index';

export const propertiesTabView = [
  createTableProperty(
    'items',
    'Array<TabViewItem>',
    'Tabview items to looped on',
    '[ ]'
  ),
  createTableProperty(
    'styleClass',
    'string',
    'External style class for tab view',
    'undefined'
  ),
];
