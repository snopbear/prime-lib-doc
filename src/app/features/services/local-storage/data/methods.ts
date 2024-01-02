import { createTableMethod } from '@factories/index';
import { TableMethod } from '@models/interfaces';

const setItemParam = [
  'key: the name of property',
  'value: the value we need to store',
];
export const localStorageMethods: Array<TableMethod> = [
  createTableMethod(
    'setItem',
    'Save items to local storage By key, value pairs',
    '(key: string, value: string): void',
    setItemParam
  ),
  createTableMethod(
    'setItemObservable',
    'Save items to local storage By key, value pairs',
    '(key: string, value: string): Observable<void>',
    setItemParam
  ),
  createTableMethod(
    'getItem',
    'Get the value from local storage for a given property',
    '(key: string): string | null',
    'key: the key of the item we need'
  ),
  createTableMethod(
    'getItemObservable',
    'Get the value from local storage for a given property',
    '(key: string): Observable<string | null>',
    'key: the key of the item we need'
  ),
  createTableMethod(
    'setToken',
    'Saves token to local storage',
    '(token: string): void',
    'token: value to be saved'
  ),
  createTableMethod(
    'getToken',
    'Get the token for the current active user',
    '(): string | null'
  ),
  createTableMethod(
    'getTokenObservable',
    'Get the token for the current active user',
    '(): Observable<string | null>'
  ),
  createTableMethod(
    'clearStorage',
    'Clear the localStorage and active variables',
    '(): void'
  ),
  createTableMethod(
    'clearStorageObservable',
    'Clear the localStorage and active variables',
    '(): Observable<void>'
  ),
  createTableMethod(
    'removeItem',
    'Removes item from local storage',
    '(key: string): void',
    'key: Key of item to be removed'
  ),
];
