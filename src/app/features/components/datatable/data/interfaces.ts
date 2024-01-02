import { createTableProperty } from '@factories/index';
import { TableProperty } from '@models/interfaces';

export const datatableInterfaces: DataTableInterfaces = {
  tableColumn: [
    createTableProperty(
      'type',
      [
        "'text'",
        "'image'",
        "'checkbox'",
        "'button'",
        "'switch'",
        "'link'",
        "'icon'",
        "'dropdown'",
      ],
      'Sets column type to be viewed'
    ),
    createTableProperty('title?', 'string', 'Sets column header title'),
    createTableProperty(
      'dataKey?',
      'string',
      'Object key in the data array passed to the table, each column is mapping & viewing a certain key from the data array'
    ),
    createTableProperty(
      'btnConfig?',
      'Array<ButtonConfig>',
      "Array of buttons to be viewed in the created column, (use only when type is set to 'button')"
    ),
    createTableProperty(
      'switchConfig?',
      'State',
      "Object containing event name & state (use only when type is set to 'switch')"
    ),
    createTableProperty(
      'sortable?',
      'boolean',
      'Enables sorting mode for the column'
    ),
    createTableProperty(
      'cellStyleClass?',
      'string',
      'External styling class for each cell in the column'
    ),
    createTableProperty(
      'headerStyleClass?',
      'string',
      'External styling class for header cell of the column'
    ),
    createTableProperty(
      'cellIcon?',
      'string',
      "Icon to be rendered in each cell (use only when type is set to 'icon')"
    ),
    createTableProperty(
      'dropDownConfig?',
      'DropDownConfig',
      'Object containg dropdown configuration to be used in each cell'
    ),
    createTableProperty(
      'textPipe?',
      '(value: string | number | Date): string',
      'Callback function to be used as a pipe in each column cell to alter/modify text value'
    ),
    createTableProperty(
      'stylePipe?',
      '(value: any): string',
      'Callback function used to apply conditional classes based on passed logic'
    ),
  ],
  state: [
    createTableProperty('event', 'string', 'Sets name of event'),
    createTableProperty(
      'state?',
      'any',
      'Data value associated to named event'
    ),
  ],
  buttonConfig: [
    createTableProperty('label?', 'string', 'Sets button label text'),
    createTableProperty(
      'severity?',
      ["'secondary'", "'success'", "'info'", "'warning'", "'help'", "'danger'"],
      'Sets button severity color'
    ),
    createTableProperty('icon?', 'string', 'Sets button icon'),
    createTableProperty('class?', 'string', 'Styling button class'),
    createTableProperty(
      'isRaised?',
      'boolean',
      'Sets button style to raised style'
    ),
    createTableProperty(
      'isRounded?',
      'boolean',
      'Sets button style to rounded style'
    ),
    createTableProperty(
      'isText?',
      'boolean',
      'Sets button style to text style'
    ),
    createTableProperty(
      'isOutline?',
      'boolean',
      'Sets button style to outline style'
    ),
    createTableProperty(
      'iconPos?',
      ["'left'", "'right'", "'top'", "'bottom'"],
      'Sets icon position with respect to text'
    ),
    createTableProperty(
      'isLink?',
      'boolean',
      'Sets button style to link style'
    ),
  ],
  dropdown: [
    createTableProperty('styleClass?', 'string', 'External styling class'),
    createTableProperty(
      'data',
      'DropDownItem[ ]',
      'Data to be rendered in dropdown'
    ),
    createTableProperty('placeholder', 'string', 'Placeholder for dropdown'),
    createTableProperty(
      'showClear?',
      'boolean',
      'Shows/hides clear icon in the dropdown'
    ),
  ],
};

interface DataTableInterfaces {
  tableColumn: TableProperty[];
  state: TableProperty[];
  buttonConfig: TableProperty[];
  dropdown: TableProperty[];
}
