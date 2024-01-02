import { createTableProperty } from '@factories/index';

export const propertiesCheakbox = [
  createTableProperty(
    'controlName',
    'string',
    'Form control name for data binding (need to be provided otherwise an exception is thrown)',
    'undefined'
  ),
  createTableProperty(
    'controlErrors',
    'FormInputErrors',
    'Control errors messages',
    'undefined'
  ),
  createTableProperty(
    'styleClass',
    'string',
    'External styling class/es',
    'undefined'
  ),

  createTableProperty(
    'data',
    ' Array<GeneralItem>',
    'Array of checkbox items',
    '[ ]'
  ),
  createTableProperty(
    'value',
    'string',
    'Value for binding if not placed in formGroup',
    'undefined'
  ),
];
