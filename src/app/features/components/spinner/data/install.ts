import { createImport } from '@factories/index';
import { Spinner } from './interface';
export const spinnerInstall: Spinner = {
  import: createImport([
    {
      import: 'AssafProgressSpinnerModule',
      from: 'assaf-prime-lib/@components/@progress-spinner',
    },
  ]),
  htmlUse: '<assaf-progress-spinner></assaf-progress-spinner>',
};
