import { createTableProperty } from '@factories/index';
import { TableProperty } from '@models/interfaces';

export const carouselInterfaces: Array<TableProperty> = [
  createTableProperty('breakpoint', 'string', 'Set maxWidth of container'),
  createTableProperty('numVisible', 'number', 'Set number of items per page'),
  createTableProperty('numScroll', 'number', 'Set number of items to scroll'),
];
