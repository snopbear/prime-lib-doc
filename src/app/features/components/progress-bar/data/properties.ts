import { createTableProperty } from "@factories/index";
import { TableProperty } from "@models/interfaces";

export const progressBarProperties : TableProperty[]=[
    createTableProperty('value', 'number', 'Current value of the progress','undefined'),
    createTableProperty('showValue', 'boolean', 'Show or hide progress bar value' ,'false'),
    createTableProperty('styleClass', 'string', 'Style class of the component','undefined'),
    createTableProperty('workWithInterceptor', 'boolean', 'Enables spinner to work based on interceptor','false'),
    createTableProperty('mode', '"determinate" | "indeterminate"', 'Defines the mode of the progress','determinate'),
    createTableProperty('unit', 'string', 'Unit sign appended to the value' , '%'),
    createTableProperty('backgroundColor', 'string', 'Color for the background of the progress' ,'undefined'),
    createTableProperty('containerStyleClass', 'string', 'External style class for container in interceptor mode only' , 'undefined'),
    createTableProperty('height', 'string', 'Sets progress bar height' , '6px'),
]