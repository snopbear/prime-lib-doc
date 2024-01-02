import { createTableProperty } from '@factories/index';

export const interfaces = [
  createTableProperty('label?', 'string', 'Sets label for menu item selecion'),
  createTableProperty(
    'icon?',
    'string',
    'Sets icon to be placed next to label'
  ),
  createTableProperty(
    'items?',
    'MenuItem[ ]',
    'Adds nested menu to the current item'
  ),
  createTableProperty('disabled?', 'boolean', 'Disables menu item'),
  createTableProperty(
    'command?',
    '(event?: any) => void',
    'Callback to be used when menu item is clicked'
  ),
  createTableProperty(
    'styleClass?',
    'string',
    'External styling class for menu item'
  ),
  createTableProperty('title?', 'string', 'Sets title for menu item'),
  createTableProperty('routerLink?', 'string', 'Router link for menu item'),
  createTableProperty(
    'queryParams?',
    '{ [k: string]: any}',
    'Query params to be passed when navigating to route'
  ),
];
