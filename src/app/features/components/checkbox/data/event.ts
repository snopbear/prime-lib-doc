import { createTableProperty } from '@factories/index';

export const eventsCheckbox = [
  createTableProperty(
    'valueChange',
    'string | Array<string>',
    'Event triggered when value changed when outside of formGroup'
  ),
];
