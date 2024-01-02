import { createTableProperty } from '@factories/index';
import { TableProperty } from '@models/interfaces';

export const fieldsetProperties: Array<TableProperty> = [
  createTableProperty(
    'styleClass',
    'string',
    'External styling classes',
    'undefined'
  ),
  createTableProperty(
    'data',
    'FieldSetData | Array<FieldSetData>',
    'Data to configure & view fieldset/s',
    'undefined'
  ),
];
