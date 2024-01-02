import { createTableProperty } from '@factories/index';
import { TableProperty } from '@models/interfaces';

export const properties: TableProperty[] = [
  createTableProperty(
    'type',
    [
      '"text"',
      '"tel"',
      '"password"',
      '"email"',
      '"textarea"',
      '"number"',
      '"chips"',
    ],
    'Sets input viewing & data type',
    "'text'"
  ),
  createTableProperty('label', 'string', 'Sets input label text', 'undefined'),
  createTableProperty(
    'placeholder',
    'string',
    'Sets input placeholder text',
    "'Placeholder'"
  ),
  createTableProperty(
    'controlName',
    'string',
    'Form control name for data binding (need to be provided otherwise an exception is thrown)',
    'undefined'
  ),
  createTableProperty(
    'size',
    ["'sm'", "'lg'"],
    "Sets input size (for normal size don't set attribute)",
    'undefined'
  ),
  createTableProperty(
    'floatLabel',
    'boolean',
    'Displays label as floating label above input',
    'false'
  ),
  createTableProperty(
    'icon',
    'string',
    'Icon name to be placed next to input',
    'undefined'
  ),
  createTableProperty(
    'iconPos',
    ["'left'", "'right'"],
    'Sets icon position (works only if icon is provided)',
    "'left'"
  ),
  createTableProperty(
    'toggleMask',
    'boolean',
    'Shows icon that shows entered password text',
    'false'
  ),
  createTableProperty(
    'passwordFeedback',
    'boolean',
    'Shows password input feedback',
    'false'
  ),
  createTableProperty(
    'chipSeperator',
    'string',
    'Sets chip seperator character',
    ','
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
    '""'
  ),
  createTableProperty(
    'autoSize',
    'boolean',
    'Enables textarea auto sizing when text is entered',
    'false'
  ),
  createTableProperty(
    'rows',
    'number',
    'Sets inital number of textarea rows (works only when autoSize is enabled)',
    '2'
  ),
  createTableProperty(
    'labelClass',
    'string',
    'External styling class for label (not when floatLabel is active)',
    'undefiend'
  ),
  createTableProperty(
    'autocomplete',
    'boolean',
    'Enables/disables auto complete for input type text only',
    'true'
  ),
];
