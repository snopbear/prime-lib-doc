import { createTableProperty } from '@factories/index';
import { TableProperty } from '@models/interfaces';

export const ButtonContent: TableProperty[] = [
  createTableProperty(
    'severity	',
    ['secondary' , 'success' , 'info' , 'warning' , 'help' , 'danger'],
    'Sets button color (refer to examples)',
    'info'
  ),
  createTableProperty(
    'label	',
    'string',
    'Text to be placed on button',
    'undefined'
  ),
  createTableProperty(
    'styleClass	',
    'string',
    'External styling class/es',
    'undefined'
  ),
  createTableProperty(
    'btnIcon ',
    'string',
    'Icon placed on button (refer to http://primefaces.org/primeng/icons',
    'undefined'
  ),
  createTableProperty(
    'size	',
    ['sm' , 'lg'],
    'Sets button size, remove property for medium size',
    'undefined'
  ),
  createTableProperty(
    'isRaised',
    'boolean',
    'Changes button shape to raised shape (refer to examples for shapes)',
    'false'
  ),
  createTableProperty(
    'isRounded',
    'boolean',
    'Changes button shape to rounded shape (refer to examples for shapes)',
    'false'
  ),
  createTableProperty(
    'isText',
    'boolean',
    'Changes button shape to text shape (refer to examples for shapes)',
    'false'
  ),
  createTableProperty(
    'isOutline',
    'boolean',
    'Changes button shape to outline shape (refer to examples for shapes)',
    'false'
  ),
  createTableProperty(
    'btnType',
    ['button' , 'submit'],
    'Sets button type, for forms set type to submit',
    "'button'"
  ),
  createTableProperty(
    'mode	',
    'ButtonMode: "badge"',
    'Sets button mode, for normal mode remove attribute',
    'undefined'
  ),
  createTableProperty(
    'badgeValue	',
    'string',
    'Sets badge value, WORKS ONLY WHEN MODE IS SET TO BADGE',
    '"0"'
  ),
  createTableProperty(
    'badgeSeverity',
    ['secondary' , 'success' , 'info' , 'warning' , 'help' , 'danger'],
    'Sets badge color, WORKS ONLY WHEN MODE IS SET TO BADGE',
    '"info"'
  ),
  createTableProperty(
    'iconPos',
    ['left' , 'right' , 'top' , 'bottom'],
    'Sets icon position if icon is provided',
    'left'
  ),
];
