import { createTableProperty } from '@factories/index';

export const SkeletonProperties = [
  createTableProperty('height', 'string', 'height of the element.', '"1rem"'),
  createTableProperty('width', 'string', 'width of the element.', 'undefined'),
  createTableProperty(
    'borderRadius',
    'string',
    'Border radius of the element',
    'undefined'
  ),
  createTableProperty(
    'size',
    'string',
    'Sets size of the Circle or Square',
    'undefined'
  ),
  createTableProperty(
    'styleClass',
    'string',
    'Style class of the skeleton',
    'undefined'
  ),
  createTableProperty(
    'shape',
    ['"rectangle"', '"circle"'],
    'Sets Shape of the element',
    '"rectangle"'
  ),
  createTableProperty(
    'animation',
    ['"wave"', '"none"'],
    'Sets Type of the animation',
    '"wave"'
  ),
];
