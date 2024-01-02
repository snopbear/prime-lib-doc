import { createTableProperty } from '@factories/index';
import { TableProperty } from '@models/interfaces';

export const ButtonContent: TableProperty[] = [
  createTableProperty(
    'disabled',
    'boolean',
    'Enables/disables button',
    'false'
  ),
  createTableProperty(
    'severity',
    ["'secondary'", "'success'", "'info'", "'warning'", "'help'", "'danger'"],
    'Sets button color based on imported theme file in project',
    "'info'"
  ),
  createTableProperty(
    'isLink',
    'boolean',
    'Sets button shape to anchor shape',
    'false'
  ),
  createTableProperty(
    'isRaised',
    'boolean',
    'Sets button shape to raised',
    'false'
  ),
  createTableProperty(
    'isRounded',
    'boolean',
    'Sets button shape to rounded',
    'false'
  ),
  createTableProperty(
    'isText',
    'boolean',
    'Sets button shape to text',
    'false'
  ),
  createTableProperty(
    'isOutline',
    'boolean',
    'Sets button shape to outline',
    'false'
  ),
  createTableProperty('label', 'string', 'Sets button text', 'undefined'),
  createTableProperty('btnIcon', 'string', 'Sets button icon', 'undefined'),
  createTableProperty(
    'btnType',
    ["'submit'", "'button'"],
    'Sets button type (for forms use submit type)',
    "'button'"
  ),
  createTableProperty(
    'size',
    ["'lg'", "'sm'"],
    "Sets button size (for normal size don't set attribute)",
    'undefined'
  ),
  createTableProperty(
    'mode',
    ["'set'", "'template'", "'badge'"],
    'Sets button viewing mode',
    'undefined'
  ),
  createTableProperty(
    'badgeValue',
    'string',
    'Sets badge value (works with badge button mode only)',
    "'0'"
  ),
  createTableProperty(
    'badgeSeverity',
    ["'secondary'", "'success'", "'info'", "'warning'", "'help'", "'danger'"],
    'Sets bagde color (works with badge button mode only)',
    "'info'"
  ),
  createTableProperty(
    'iconPos',
    ["'left'", "'right'", "'top'", "'bottom'"],
    'Sets icon position (works only if icon is provided)',
    "'left'"
  ),
  createTableProperty(
    'styleClass',
    'string',
    'External styling class/es',
    'undefined'
  ),
];

export const events: TableProperty[] = [
  createTableProperty(
    'click',
    'void',
    'Event triggered whenever the button is clicked'
  ),
];
