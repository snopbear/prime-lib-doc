import { createTableProperty } from '@factories/index';

export const toastProperties = [
  createTableProperty(
    'position',
    [
      "'top-right'",
      "'top-left'",
      "'bottom-right'",
      "'bottom-left'",
      "'top-center'",
      "'bottom-center'",
      "'center'",
    ],
    'Sets toast position',
    "'top-right'"
  ),
  createTableProperty(
    'styleClass',
    'string',
    'External style class for message',
    'undefined'
  ),
  createTableProperty(
    'key',
    'string',
    'Key identifier for the toast instance',
    'undefined'
  ),
  createTableProperty('zIndex', 'number', 'Sets z-index of active toast', '1'),
  createTableProperty('isResponsive', 'boolean', 'Enables showing toast as a snack bar shape based on entered breakpoint', 'true'),
  createTableProperty('breakpoint', 'number', 'Max width breakpoint to show toast as a snack bar', '768px'),
];
