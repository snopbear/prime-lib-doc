import { createTableProperty } from '@factories/index';
import { TableProperty } from '@models/interfaces';

export const imageUploaderProperties: TableProperty[] = [
  createTableProperty('width', 'string', 'Sets width of container', '"100px"'),
  createTableProperty(
    'height',
    'string',
    'Sets height of container',
    '"100px"'
  ),
  createTableProperty(
    'styleClass',
    'string',
    'External style class for container',
    'undefined'
  ),
  createTableProperty(
    'activeImageClass',
    'string',
    'External style class for active image',
    'undefined'
  ),
  createTableProperty(
    'uploaderClass',
    'string',
    'External style class for active image',
    'undefined'
  ),
  createTableProperty(
    'overLayClass',
    'string',
    'External style class for overlay layer',
    'undefined'
  ),
  createTableProperty(
    'overLayIcon',
    'string',
    'Sets overlay icon',
    '"pi-times-circle"'
  ),
  createTableProperty(
    'uploadIcon',
    'string',
    'Sets upload icon',
    '"pi-upload"'
  ),
  createTableProperty(
    'controlName',
    'string',
    'Form control name for data binding (need to be provided otherwise an exception is thrown)',
    'undefined'
  ),
  createTableProperty(
    'uploadMode',
    ["'file'", "'base64'"],
    'Sets emitting mode of event',
    "'file'"
  ),
  createTableProperty(
    'fileType',
    [
      '"image/*"',
      '".svg"',
      '".jpg"',
      '".png"',
      '".webp"',
      '".jpeg"',
      '".bmp"',
      '".svgz"',
    ],
    'Sets file extension',
    '"image/*"'
  ),
];
