import { createImport } from '@factories/index';

export const dividerInstall = {
  import: createImport([
    {
      import: 'AssafDividerModule',
      from: 'assaf-prime-lib/@components/@divider',
    },
  ]),
  htmlUse: '<assaf-divider></assaf-divider>',
};
