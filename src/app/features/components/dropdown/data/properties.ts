import { createTableProperty } from '@factories/index';

export const DropdownProperties = [
  createTableProperty('label', 'string', 'Sets input label text', 'undefined'),
  createTableProperty(
    'placeholder',
    'string',
    'Sets input placeholder text',
    "'Select Item'"
  ),
  createTableProperty(
    'showClear',
    'boolean',
    'Shows clear selected item button',
    'false'
  ),
  createTableProperty(
    'autoDisplayFirst',
    'boolean',
    'Whether to display the first item as the label if no placeholder is defined and value is null. (works with normal dropdown only)',
    'false'
  ),
  createTableProperty(
    'enableFilter',
    'boolean',
    'Enables search bar in dropdown',
    'false'
  ),
  createTableProperty(
    'data',
    'Array<DropDownItem>',
    'Data to be viewed & selected in component',
    '[ ]'
  ),
  createTableProperty(
    'controlName',
    'string',
    'Form control name for data binding (need to be provided otherwise an exception is thrown)',
    'undefined'
  ),
  createTableProperty(
    'multiSelect',
    'boolean',
    'Enables multi-select dropdown',
    'false'
  ),
  createTableProperty(
    'mode',
    ["'text-flag'", "'text-svg'", "'text-icon'"],
    'Sets dropdown display mode',
    'undefined'
  ),
  createTableProperty(
    'roundedFlagIcon',
    'boolean',
    'Sets flag icons to rounded (takes effect only in text-flag mode)',
    'false'
  ),
  createTableProperty(
    'multiSelectMode',
    ["'chip'", "'template'"],
    'Changes multi-selction dropdown mode (takes effect only when multiSelect is enabled)',
    'undefined'
  ),
  createTableProperty(
    'autoComplete',
    'boolean',
    'Adds support for autocomplete when user types in field',
    'false'
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
    'undefined'
  ),
  createTableProperty(
    'styleClass',
    'string',
    'External styling class/es',
    'undefined'
  ),
  createTableProperty(
    'labelClass',
    'string',
    'External styling class for label (not when floatLabel is active)',
    'undefined'
  ),
];
