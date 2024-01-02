import { createImport } from '@factories/index';

export const intercepterTypes = [
  {
    name: 'HeaderAuthorization',
    tsUse: createImport(
      [
        {
          import: 'HeaderAuthorizationInterceptor',
          from: 'assaf-prime-lib/interceptors',
        },
      ],
      'AppModule',
      'providers'
    ),
  },
  {
    name: 'HeaderLanguageStorage',
    tsUse: createImport(
      [
        {
          import: 'HeaderLanguageStorageInterceptor',
          from: 'assaf-prime-lib/interceptors',
        },
      ],
      'AppModule',
      'providers'
    ),
  },
  {
    name: 'Loading',
    tsUse: createImport(
      [
        {
          import: 'LoadingInterceptor',
          from: 'assaf-prime-lib/interceptors',
        },
      ],
      'AppModule',
      'providers'
    ),
  },
  {
    name: 'ErrorConsole',
    tsUse: createImport(
      [
        {
          import: 'ErrorConsoleInterceptor',
          from: 'assaf-prime-lib/interceptors',
        },
      ],
      'AppModule',
      'providers'
    ),
  },
  {
    name: 'HeaderJSONContent',
    tsUse: createImport(
      [
        {
          import: 'HeaderJSONContentInterceptor',
          from: 'assaf-prime-lib/interceptors',
        },
      ],
      'AppModule',
      'providers'
    ),
  },
];
