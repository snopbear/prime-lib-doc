import { createTableMethod } from '@factories/index';
import { TableMethod } from '@models/interfaces';

const showDialogParameters = [
  'component: component to be displayed in dialog box.',
  'data: passed to dialog window.',
  'maximizable: shows/hides maximize icon.',
  'header: sets header string.',
  'styleClass: external styleclass for dialog box',
  'dismissableMask: enables closing popup when click outside',
];
const showDialogProtoType=[
  '(',
  'component:Type<any>,data?:any,  ',
  'maximizable?: boolean,',
  'header?: string,',
  'styleClass?: string,',
  'dismissableMask?: boolean',
  '):void'
]

export const dialogMethods: Array<TableMethod> = [
  createTableMethod(
    'getData',
    'Returns data passed to dialog window',
    '(): any'
  ),
  createTableMethod('closeDialog', 'Close currently open dialog', '(): void'),
  createTableMethod(
    'onDialogClose',
    'Subscription to closed dialogs',
    '():Observable<any>'
  ),
  createTableMethod(
    `showDialog`,
    `Opens a dialog window with passed component`,
    showDialogProtoType,
    // '(component: Type<any>,data?: any,maximizable?: boolean,header?: string,styleClass?: string,dismissableMask?: boolean):void',
    showDialogParameters
  ),
];
