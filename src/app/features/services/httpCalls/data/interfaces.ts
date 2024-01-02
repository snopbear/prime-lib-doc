import { createTableProperty } from "@factories/index";

 
export const HttpCallsInterfaces ={
    requestType:[
        createTableProperty('POST', 'strnig', 'Used as shown text for post data in Database'),
        createTableProperty('PUT', 'strnig', 'Used as shown text for update data in Database'),
        createTableProperty('GET', 'string', 'Used as shown text for get data from Database'),
        createTableProperty('DELETE', 'string', 'Used as shown text for delete data from Database'),
    ]
}