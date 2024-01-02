import { createImport } from '@factories/index';

export const progressBarInstall = {
  import: createImport([
    {
      import: 'AssafProgressBarModule',
      from: 'assaf-prime-lib/@components/@progress-bar',
    },
  ]),
  htmlUse: `<assaf-progressBar [value]="50"></assaf-progressBar>`,
};
