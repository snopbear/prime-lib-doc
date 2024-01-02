import { createTableProperty } from "@factories/index";

 
export const AccessLayerInterfaces ={
    State:[
        createTableProperty('data', 'T[]', 'Used as shown text for the dropdown'),
        createTableProperty('selectedId', 'number | string', 'Used as shown text for the dropdown'),
    ],
    EnforceID:[
        createTableProperty('id?', 'number | string', 'Used as shown text for the dropdown'),
    ],
    RequestURLs:[
        createTableProperty('get?', 'string', 'Used to get all data from API'),
        createTableProperty('post?', 'string', 'Used to create a new employee'),
        createTableProperty('put?', 'string', 'Used to update an existing object'),
        createTableProperty('delete?', 'string', 'Used to Delete object'),
    ]
}
