import { createTableProperty } from '@factories/index';

export const interfaces = [
  createTableProperty(
    'base64',
    'string',
    'Holds converted base64 string of selected file'
  ),
  createTableProperty('size', 'number', 'Selected file size'),
  createTableProperty('type', 'string', 'Selected file type (extension)'),
  createTableProperty('name', 'string', 'Selected file name'),
];
