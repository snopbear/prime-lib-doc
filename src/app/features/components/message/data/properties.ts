import { createTableProperty } from '@factories/index';

export const messageProperties = [
  createTableProperty(
    'closable',
    'boolean',
    'Enables closing the message message',
    'true'
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
    'Unique key identifier for message (MUST be provided)',
    'undefined'
  ),
];
