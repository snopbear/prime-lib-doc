import { createTableProperty } from '@factories/index';

export const propertiesButton = [
  createTableProperty('label', 'string', 'Sets text button', 'undefined'),
  createTableProperty(
    'isText',
    'boolean',
    'Sets button shape to text',
    'false'
  ),
  createTableProperty(
    'isRounded',
    'boolean',
    'Sets button shape to rounded',
    'false'
  ),
  createTableProperty(
    'isRaised',
    'boolean',
    'Sets button shape to raised',
    'false'
  ),
  createTableProperty(
    'isOutline',
    'boolean',
    'Sets button shape to outline',
    'false'
  ),
  createTableProperty('btnIcon', 'string', 'Sets button icon', 'undefined'),
  createTableProperty('fileType', 'string', 'Sets file extension', 'undefined'),
  createTableProperty(
    'size',
    ['"sm"', '"lg"'],
    'Sets button size (for normal size don,t set attribute)',
    'undefined'
  ),
  createTableProperty(
    'iconPos',
    ['"left"', '"right"'],
    'Sets icon position (works only if icon is provided)',
    '"left"'
  ),

  createTableProperty(
    'severity',
    [`"secondary"`, '"success"', '"info"', '"warning"', '"help"', '"danger"'],
    'Sets button color based on imported theme file in project',
    '"info"'
  ),
];
