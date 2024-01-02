import { createTableMethod } from '@factories/index';

export const AccessLayerMethods = [
  createTableMethod(
    'load',
    ' Loads all data on GET url',
    '(): Observable<any>'
  ),
  createTableMethod(
    'initService',
    ' Initializes service with urls',
    '(config: RequestURLs, loadFromAPI: boolean = true): void',
    [
      'config: Object containing urls for requests implementing <RequestURLs> interface ',
      'loadFromAPI: enables loading data from get url when initiating service',
    ]
  ),
  createTableMethod(
    'fillState',
    'Fills state array with data externally',
    '(data: T[]): void',
    'data: data to be filled in state'
  ),
  createTableMethod(
    'create',
    ' Creates new object on POST url',
    '(newData: T): Observable<any>',
    'newData: Value to be posted'
  ),
  createTableMethod(
    'update',
    ' Updates object on PUT url',
    '(newData: T): Observable<any>',
    'newData: Value to be posted'
  ),
  createTableMethod(
    'delete',
    ' Deletes object on DELETE url',
    '(dataToDelete: T): Observable<any>',
    'dataToDelete: Value to be deleted'
  ),
];
