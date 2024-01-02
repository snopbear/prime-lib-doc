import { createTableProperty } from '@factories/index';

export const DropdownInterfaces = {
  interface: [
    createTableProperty('key', 'string', 'Used as shown text for the dropdown'),
    createTableProperty(
      'value',
      'string',
      'Value return when an item is selected'
    ),
    createTableProperty(
      'iconURL?',
      'string',
      'Directory for icon image (USE WHEN IN TEXT-SVG MODE ONLY)'
    ),
    createTableProperty(
      'iconName?',
      'string',
      'Icon name to be placed next to items in dropdown, USE ONLY WITH TEXT-ICON MODE (refer to http://primefaces.org/primeng/icons)'
    ),
  ],
  interfacesControlErrors: [
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
