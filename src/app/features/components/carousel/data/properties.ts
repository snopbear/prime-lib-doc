import { createTableProperty } from '@factories/index';
import { TableProperty } from '@models/interfaces';

export const carouselProperties: TableProperty[] = [
  createTableProperty(
    'circular',
    'boolean',
    'Defines if scrolling would be infinite',
    'false'
  ),
  createTableProperty(
    'numScroll',
    'number',
    'Set number of items to scroll',
    '1'
  ),
  createTableProperty(
    'numVisible',
    'number',
    'Set number of items per page',
    'undefined'
  ),
  createTableProperty('data', 'Array<any>', 'Data to be looped on', '[ ]'),
  createTableProperty(
    'autoplayInterval',
    'number',
    'Set Time in milliseconds to scroll items automatically',
    'undefined'
  ),
  createTableProperty(
    'responsiveOptions',
    'Array<CarouselResponsiveOption>',
    'Set An array of options for responsive design',
    'undefined'
  ),
  createTableProperty(
    'orientation',
    ["'horizontal'", "'vertical'"],
    'Sets carousel orientation',
    'horizontal'
  ),
  createTableProperty(
    'verticalViewPortHeight',
    'string',
    'Set Height of the viewport in vertical layout',
    'undefined'
  ),
  createTableProperty(
    'styleClass',
    'string',
    'External style class for caeousel container',
    'undefined'
  ),
  createTableProperty(
    'showNavigators',
    'boolean',
    'Shows navigator buttons',
    'true'
  ),
  createTableProperty(
    'indicatorsContentClass',
    'string',
    'Indicators content style class',
    'undefined'
  ),
  createTableProperty(
    'indicatorStyleClass',
    'string',
    'Indicators style class',
    'undefined'
  ),
];
