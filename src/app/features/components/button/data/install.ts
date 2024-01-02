import { createImport } from '@factories/index';

export const buttonInstall = {
  import: createImport([
    {
      import: 'AssafButtonModule',
      from: 'assaf-prime-lib/@components/@button',
    },
  ]),
  htmlUse: `<assaf-button label="Save"></assaf-button>`,
};
