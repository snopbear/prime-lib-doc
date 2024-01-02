import { createTableProperty } from '@factories/index';

export const CalendarProperties = [
  createTableProperty(
    'mode',
    ['"min-max"', '"range"', '"month"', '"time"', '"date-time"', '"year"'],
    "Sets calendar mode, for basic mode don't set value for property",
    'undefined'
  ),
  createTableProperty('label', 'string', 'Sets input label', 'undefined'),
  createTableProperty(
    'placeholder',
    'string',
    'Sets input placeholder',
    "'Pick Date'"
  ),
  createTableProperty(
    'controlName',
    'string',
    'Form control name for data binding (need to be provided otherwise an exception is thrown)',
    'undefined'
  ),
  createTableProperty(
    'floatLabel',
    'boolean',
    'Displays label as floating label above input',
    'false'
  ),
  createTableProperty(
    'showCalendarIcon',
    'boolean',
    'Shows/hides calendar icon next to input',
    'false'
  ),
  createTableProperty(
    'readOnly',
    'boolean',
    'Enables user editing for selected date (modifiable input)',
    'true'
  ),
  createTableProperty(
    'timeFormat',
    ['"12"', '"24"'],
    'Time selection format (used only in any mode has time enabled)',
    '"12"'
  ),
  createTableProperty(
    'showButtons',
    'boolean',
    'Shows today & clear buttons in date picking',
    'false'
  ),
  createTableProperty(
    'enableInline',
    'boolean',
    'Shows date picking as inline view',
    'false'
  ),
  createTableProperty(
    'showWeeks',
    'boolean',
    'Shows week numbers in date picking',
    'false'
  ),
  createTableProperty(
    'minDate',
    'Date',
    'Date object used when min-max mode is selected',
    'undefined'
  ),
  createTableProperty(
    'controlErrors',
    'FormInputErrors',
    'Control errors messages',
    'undefined'
  ),
  createTableProperty(
    'labelClass',
    'string',
    'External styling class for label (not when floatLabel is active)s',
    'undefined'
  ),
  createTableProperty(
    'styleClass',
    'string',
    'External styling class/es',
    'undefined'
  ),
  createTableProperty(
    'maxDate',
    'Date',
    'Date object used when min-max mode is selected',
    'undefined'
  ),
  createTableProperty(
    'dateFormat',
    'string',
    [
      'd - day of month (no leading zero)',
      'dd - day of month (two digit)',
      'o - day of the year (no leading zeros)',
      'oo - day of the year (three digit)',
      'D - day name short',
      'DD - day name long',
      'm - month of year (no leading zero)',
      'mm - month of year (two digit)',
      'M - month name short',
      'MM - month name long',
      'y - year (two digit)',
      'yy - year (four digit)',
      '@ - Unix timestamp (ms since 01/01/1970)',
      '! - Windows ticks (100ns since 01/01/0001)',
      "'...' - literal text",
      "'' - single quote",
      'anything else - literal text',
    ],
    '"dd-mm-yy"'
  ),
];
