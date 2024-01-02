import { createTableProperty } from '@factories/index';

export const propertiesRadioButton = [
  createTableProperty(
    'controlErrors',
    'FormInputErrors',
    'Control errors messages',
    'undefined'
  ),
  createTableProperty(
    'controlName',
    'string',
    'Form control name for data binding (need to be provided otherwise an exception is thrown)',
    'undefined'
  ),

  createTableProperty(
    'data',
    'Array<GeneralItem>',
    'Array of radio buttons items',
    '[ ]'
  ),
  createTableProperty(
    'styleClass',
    'string',
    ' External styling class/es',
    'undefined'
  ),
];
