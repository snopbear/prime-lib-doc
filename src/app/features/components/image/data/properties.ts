import { createTableProperty } from '@factories/index';

export const propertiesImage = [
  createTableProperty('showPreview', 'boolean', 'Show image preview', 'false'),
  createTableProperty('width', 'string', 'Image width', 'undefined'),
  createTableProperty('height', 'string', 'Image height', 'undefined'),
  createTableProperty('src', 'string', 'Image src directory', 'undefined'),
  createTableProperty('alt', 'string', 'Image alt text', 'undefined'),
  createTableProperty('imageStyle', 'string', 'Image style class', 'undefined'),
  createTableProperty(
    'styleClass',
    'string',
    'External class/es for component',
    'undefined'
  ),
  createTableProperty('customPreview', 'boolean', 'Custom preview', 'false'),
];
