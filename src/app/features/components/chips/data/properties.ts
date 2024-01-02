import { createTableProperty } from '@factories/index';

export const ChipProperties = [
  createTableProperty('title', 'string', 'Title Chip', 'undefined'),
  createTableProperty('label', 'string', 'Text in the chip', 'undefined'),
  createTableProperty(
    'removable',
    'boolean',
    'Display a remove icon.',
    'false'
  ),
  createTableProperty(
    'styleClass',
    'string',
    'Style class of the component.',
    'undefined'
  ),
  createTableProperty(
    'titleClass',
    'string',
    'External class for label',
    'undefined'
  ),
  createTableProperty(
    'chipIcon',
    'string',
    'Sets icon in the chip ex(pi-facebook)',
    'undefined'
  ),
  createTableProperty(
    'removeIcon',
    'string',
    'Sets icon that appear for delete',
    '"pi-times-circle"'
  ),
  createTableProperty(
    'image',
    'string',
    'Sets the image to display',
    'undefined'
  ),
];
