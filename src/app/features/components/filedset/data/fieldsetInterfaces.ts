import { createTableProperty } from "@factories/index";
import { TableProperty } from "@models/interfaces";

export const fieldsetInterfaces:Array<TableProperty>=[
    createTableProperty(
        'header',
        'string',
        'Set Fieldset title',
    ),
    createTableProperty(
        'content',
        'string',
        'Set fieldset Content',
    ),
    createTableProperty(
        'isToggleable?',
        'boolean',
        'show Toggleable',
    ),
]