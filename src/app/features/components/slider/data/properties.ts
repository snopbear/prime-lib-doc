import { createTableProperty } from '@factories/index';

export const propertiesSlider = [
  createTableProperty(
    'controlName',
    'string',
    'Form control name for data binding (need to be provided if placed if formGroup)',
    'undefined'
  ),
  createTableProperty(
    'value',
    'number',
    'Value for binding if not placed in formGroup',
    'undefined'
  ),
  createTableProperty(
    'orientation',
    ['"horizontal"', '"vertical"'],
    'Slider orientation are horizontal and vertical',
    '"horizontal"'
  ),
  createTableProperty(
    'range',
    'boolean',
    'Allows range selection (min-max)',
    'false'
  ),
  createTableProperty('step', 'number', 'undefined', 'Number of slider steps'),
  createTableProperty(
    'minBoundary',
    'number',
    'Min slider value (if range is active)',
    '0'
  ),
  createTableProperty(
    'maxBoundary',
    'number',
    'Max slider value (if range is active)',
    '100'
  ),
  createTableProperty(
    'styleClass',
    'string',
    'External styling class/es',
    'undefined'
  ),
  createTableProperty(
    'controlErrors',
    'FormInputErrors',
    'Control errors messages',
    'undefined'
  ),
  createTableProperty('label', 'string', 'Set rating text', 'undefined'),
  createTableProperty(
    'labelClass',
    'string',
    'External styling class for label (not when floatLabel is active)',
    'undefined'
  ),
  createTableProperty(
    'disabled',
    'boolean',
    'Disables slider editing (in case of formGroup don t use & provide it in formControl)',
    'false'
  ),
];
export const interfacesSlider = {
  tableColumn: [
    createTableProperty(
      'required?',
      'string',
      'Form validator required error message'
    ),
    createTableProperty(
      'minlength?',
      'string',
      'Form validator minimum length error message'
    ),
    createTableProperty(
      'maxlength?',
      'string',
      'Form validator maximum length error message'
    ),
    createTableProperty(
      'pattern?',
      'string',
      'Form validator pattern error message'
    ),
    createTableProperty(
      'email?',
      'string',
      'Form validator email error message'
    ),
    createTableProperty(
      'max?',
      'string',
      'Form validator maximum value error message'
    ),
    createTableProperty(
      'min?',
      'string',
      'Form validator minimum value error message'
    ),
    createTableProperty(
      'requiredTrue?',
      'string',
      'Form validator required true error message (used with checkboxes)'
    ),
  ],
};
export const events = [
  createTableProperty(
    'valueChange',
    'number | Array<number>',
    'Event triggered if value is changed'
  ),
];
