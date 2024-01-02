import { createTableProperty } from '@factories/index';
import { TableProperty } from '@models/interfaces';

export const datatableProperties: TableProperty[] = [
  createTableProperty(
    'showTableHeader',
    'boolean',
    'Enables table header',
    'true'
  ),
  createTableProperty(
    'tableColumns',
    'Array<TableColumn>',
    'Datatable configuration array (sets viewing mode for each column)',
    '[ ]'
  ),
  createTableProperty(
    'data',
    'Array<any>',
    'Array of data to be viewed in rows',
    '[ ]'
  ),
  createTableProperty(
    'size',
    ["'sm'", "'lg'"],
    'Sets table view size',
    'undefined'
  ),
  createTableProperty(
    'gridLines',
    'boolean',
    'Enables table gridlines',
    'false'
  ),
  createTableProperty('isStriped', 'boolean', 'Enables stripped rows', 'false'),
  createTableProperty(
    'paginate',
    'boolean',
    'Enables pagination in table',
    'false'
  ),
  createTableProperty(
    'rowsPerPageOptions',
    'number[ ]',
    'Sets the list of number of pagination rows',
    'undefined'
  ),
  createTableProperty(
    'rowsCountPerPage',
    'number',
    'Sets number of pagination rows',
    'undefined'
  ),
  createTableProperty(
    'showPageReport',
    'boolean',
    'Shows pagination report (works only when pagination is enabled)',
    'false'
  ),
  createTableProperty(
    'isScrollable',
    'boolean',
    'Enables scrolling inside table',
    'false'
  ),
  createTableProperty(
    'scrollHeight',
    ['number', "'flex'"],
    'Sets scroll height (works only when isScrollable is enabled)',
    "'flex'"
  ),
  createTableProperty(
    'styleClass',
    'string',
    'External class for styling ptable component',
    'undefined'
  ),
  createTableProperty(
    'tableClass',
    'string',
    'External class for styling table',
    'undefined'
  ),
  createTableProperty(
    'hasCustomSort',
    'boolean',
    'Enables external sorting (subscribe to event to sort)',
    'false'
  ),
  createTableProperty(
    'freezeHeader',
    'boolean',
    'Enables freezing header by adding freeze class to tableClassStyle',
    'false'
  ),
  createTableProperty(
    'rowExpansionDataKey',
    'string',
    'Datakey to enable expanded row',
    'undefined'
  ),
  createTableProperty(
    'filterKeys',
    'string[ ]',
    'Array of dataKeys to be used when global search is enabled',
    '[ ]'
  ),
  createTableProperty(
    'expandedByDefault',
    'boolean',
    'Expands all rows on component loading (use only when rowExpansionDataKey is provided)',
    'false'
  ),
  createTableProperty(
    'showExpandedButton',
    'boolean',
    'Shows/hides expanded row button',
    'true'
  ),
  createTableProperty('lazyLoad', 'boolean', 'Enables lazy loading', 'false'),
  createTableProperty(
    'totalRecords',
    'number',
    'Total records used in pagination',
    'undefined'
  ),
  createTableProperty(
    'loading',
    'boolean',
    'Enables loading spinner when fetching data in lazy loading',
    'false'
  ),
  createTableProperty(
    'resetPagination',
    'boolean',
    'Resets table pagination',
    'false'
  ),
];

export const searchInputProperties: TableProperty[] = [
  createTableProperty('label', 'string', 'Sets label for input', 'undefined'),
  createTableProperty(
    'template',
    'Table',
    'Table template reference, required for the component to work',
    'undefined'
  ),
  createTableProperty(
    'placeholder',
    'string',
    'Search input placeholder',
    "'Global Search'"
  ),
  createTableProperty(
    'inputStyleClass',
    'string',
    'External styling class for input',
    'undefined'
  ),
  createTableProperty(
    'iconPos',
    ["'left'", "'right'"],
    'Sets Icon position',
    "'left'"
  ),
  createTableProperty('icon', 'string', 'Sets Input icon', "'pi-search'"),
  createTableProperty(
    'styleClass',
    'string',
    'Container styling class',
    'undefined'
  ),
  createTableProperty(
    'labelClass',
    'string',
    'Styleclass for label',
    'undefined'
  ),
];
