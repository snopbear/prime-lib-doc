import { createTableProperty } from '@factories/index';
import { TableProperty } from '@models/interfaces';

export const dividerProperties: Array<TableProperty> = [
  createTableProperty(
    'label',
    'string',
    'Text to be placed on divider',
    'undefined'
  ),
  createTableProperty(
    'type',
    ['"solid"', '"dashed"', '"dotted"'],
    'Sets divider line shape',
    '"solid"'
  ),
  createTableProperty(
    'layout',
    ['"horizontal"', '"vertical"'],
    'Sets divider orientation',
    '"horizontal"'
  ),
  createTableProperty(
    'align',
    [`"left"`, '"center"', '"right"', '"top"', '"center"', '"bottom"'],
    'Sets divider header position',
    '"center"'
  ),
  createTableProperty(
    'mode',
    ["'badge'", "'icon'", "'custom'"],
    "Sets divider mode, for default don't set value to property",
    'undefined'
  ),
  createTableProperty(
    'styleClass',
    'string',
    'External styling class/es',
    'undefined'
  ),
  createTableProperty(
    'icon',
    'string',
    'Icon to be placed next to label (active only in icon mode)',
    'undefined'
  ),
  createTableProperty(
    'iconPos',
    ['"left"', '"right"'],
    'Sets icon position left or right',
    '"left"'
  ),
];
