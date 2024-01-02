import { createTableProperty } from '@factories/index';

export const propertiesRating = [
  createTableProperty(
    'controlName',
    'string',
    'Form control name for data binding (need to be provided otherwise an exception is thrown)',
    'undefined'
  ),
  createTableProperty(
    'value',
    'number',
    'Value for binding if not placed in formGroup',
    'undefined'
  ),
  createTableProperty('showCancel', 'boolean', 'Show cancel icon', 'false'),
  createTableProperty('label', 'string', 'set rating text', 'undefined'),
  createTableProperty(
    'onIconClass',
    'string',
    'Class for selected rate',
    '"pi-star-fill"'
  ),
  createTableProperty(
    'offIconClass',
    'string',
    'Class for normal rate',
    '"pi-star"'
  ),
  createTableProperty(
    'labelClass',
    'string',
    'External styling class for label (not when floatLabel is active)',
    'undefined'
  ),
  createTableProperty('stars', 'number', 'Number Of Stars', '5'),
  createTableProperty(
    'cancelIconClass',
    'straing',
    'Class for cancel Icon',
    '"pi-ban"'
  ),
  createTableProperty(
    'readonly',
    'boolean',
    'Show rating as readonly',
    'false'
  ),
  createTableProperty(
    'controlErrors',
    'FormInputErrors',
    'Control errors messages',
    'undefined'
  ),
];

export const events = [
  createTableProperty(
    'valueChange',
    'number | Array<number>',
    'Event triggered when value changed when outside of formGroup'
  ),
];
