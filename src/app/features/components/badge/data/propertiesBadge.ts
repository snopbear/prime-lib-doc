import { createTableProperty } from '@factories/index';

export const propertiesBadge = [
  createTableProperty('value', 'string', 'Sets value badge', 'undefined'),
  createTableProperty(
    'size',
    ["'large'" , "'xlarge'"],
    'Sets options are "large" and "xlarge"',
    'undefined'
  ),
  createTableProperty('icon', 'string', 'Sets icon', 'undefined'),
  createTableProperty(
    'severity',
    ["'success'" , "'info'" , "'warning'" , "'danger'"],
    'Sets badge color',
    '"success"'
  ),
  createTableProperty(
    'styleClass',
    'string',
    'Sets style class Badge',
    'undefined'
  ),
];
