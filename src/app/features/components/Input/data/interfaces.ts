import { createTableProperty } from '@factories/index';
import { TableProperty } from '@models/interfaces';

export const interfaces: TableProperty[] = [
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
  createTableProperty('email?', 'string', 'Form validator email error message'),
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
];
