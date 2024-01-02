import { createTableProperty } from '@factories/index';
import { TableProperty } from '@models/interfaces';

export const InputNumberProperties: TableProperty[] = [
  createTableProperty('locale', 'string', 'Sets locale of input', ''),
  createTableProperty(
    'localeMatcher',
    ["'lookup'", "'best fit'"],
    'Sets locale mode',
    'best fit'
  ),
  createTableProperty('currency', 'string', 'Sets currency format', ''),
  createTableProperty(
    'mode',
    ["'decimal'", "'currency'"],
    'Sets input mode',
    'decimal'
  ),
  createTableProperty('size', 'number', 'Sets the input size in pexels', '20'),
  createTableProperty(
    'buttonLayout',
    ["'stacked'", "'horizontal'", "'vertical'"],
    'Sets layout of increment/decrement buttons',
    'stacked'
  ),

  createTableProperty('prefix', 'string', 'Adds text before number', ''),
  createTableProperty('suffix', 'string', 'Adds text after number', ''),
  createTableProperty(
    'minFractionDigits',
    'number',
    'Sets min number of fraction digits',
    ''
  ),
  createTableProperty(
    'maxFractionDigits',
    'number',
    'Sets max number of fraction digits',
    ''
  ),
  createTableProperty(
    'minValue',
    'number',
    ' Sets min number entered in input',
    ''
  ),
  createTableProperty(
    'maxValue',
    'number',
    ' Sets max number entered in input',
    ''
  ),
  createTableProperty('step', 'number', 'Sets increment/decrement step', '1'),
  createTableProperty(
    'inputStyleClass',
    'string',
    'External styling class for input',
    ''
  ),
  createTableProperty(
    'readOnly',
    'boolean',
    'Sets input as read only',
    'false'
  ),
  createTableProperty(
    'showClear',
    'boolean',
    'Shows clear icon that clears entered value',
    'false'
  ),
  createTableProperty(
    'showButtons',
    'boolean',
    'Shows increment & decrement buttons',
    'false'
  ),
  createTableProperty(
    'incrementButtonClass',
    'string',
    'External styling class for increment button',
    ''
  ),
  createTableProperty(
    'decrementButtonClass',
    'string',
    'External styling class for decrement button',
    ''
  ),
  createTableProperty(
    'incrementButtonIcon',
    'string',
    'Sets increment button icon',
    'pi-chevron-up'
  ),
  createTableProperty(
    'decrementButtonIcon',
    'string',
    'Sets decrement button icon',
    'pi-chevron-down'
  ),
  createTableProperty(
    'allowEmpty',
    'boolean',
    'Enables leaving the input empty',
    'false'
  ),
  createTableProperty(
    'controlName',
    'string',
    'Form control name for data binding (need to be provided otherwise an exception is thrown)',
    ''
  ),
  createTableProperty('label', 'string', 'Sets input label text', ''),
  createTableProperty(
    'placeholder',
    'string',
    'Sets input placeholder text',
    'Select Item'
  ),
  createTableProperty(
    'floatLabel',
    'boolean',
    'Displays label as floating label above input',
    'false'
  ),
  createTableProperty(
    'controlErrors',
    'FormInputErrors',
    'Control errors messages',
    ''
  ),
  createTableProperty('styleClass', 'string', 'External styling class/es', ''),
  createTableProperty(
    'labelClass',
    'string',
    'External styling class for label (not when floatLabel is active)',
    ''
  ),
  createTableProperty(
    'useGrouping',
    'boolean',
    ' Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.',
    'false'
  ),
];
