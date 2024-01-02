import { createTableProperty } from '@factories/index';

export const profileDropProperties = [
  createTableProperty(
    'label',
    'string',
    'Sets text to be displayed on button',
    'undefined'
  ),
  createTableProperty('icon', 'string', 'Sets button icon', 'undefined'),
  createTableProperty('image', 'string', 'Sets profile image', 'undefined'),
  createTableProperty(
    'menuItems',
    'Array<MenuItem>',
    'Array of items to be displayed in menu',
    '[ ]'
  ),
  createTableProperty(
    'buttonStyleClass',
    'string',
    'External styling class for button',
    'undefined'
  ),
  createTableProperty(
    'menuStyleClass',
    'string',
    'External styling class for menu',
    'undefined'
  ),
  createTableProperty('zIndex', 'number', 'Sets z-index for menu', '5'),
];
