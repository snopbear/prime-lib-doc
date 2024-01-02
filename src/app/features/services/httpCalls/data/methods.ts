import { createTableMethod } from '@factories/index';

export const HttpCallsMethods = [
  createTableMethod(
    'consumingAPI<T>',
    `Sends request must be one of this
    [' PUT ' ,' POST ' ,' DELETE ' ,' GET ' ]`,
    `(
        url: string,
        requestType: RequestType,
        data?: any,
        optionsObserveResponse?: {}
      ): Observable<Partial<HttpResponse<T>> | Partial<HttpEvent<T>> | Partial<T>>`,
    [
      'url: is the url for sending request',
      'requestType: sets request type based on REST modes',
      'data: is the data to be sent in body',
      'optionsObserveResponse to be sent in header Observe different  types of response in HttpClient a @returns Observable based on requestType',
    ]
  ),
];
