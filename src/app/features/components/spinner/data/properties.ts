import { createTableProperty } from '@factories/index';

export const spinnerProperties = [
  createTableProperty(
    'styleClass',
    'string',
    'External style class for spinner',
    'undefined'
  ),
  createTableProperty('strokeWidth', 'string', 'Sets spinner width', '"2"'),
  createTableProperty(
    'containerStyleClass',
    'string',
    'Sets spinner width',
    'undefined'
  ),
  createTableProperty(
    'workWithInterceptor',
    'boolean',
    'Enables spinner to work based on interceptor',
    'false'
  ),
];
