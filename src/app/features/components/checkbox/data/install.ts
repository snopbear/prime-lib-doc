import { createImport } from '@factories/index';

export const CheckBoxInstall = {
  import: createImport([
    {
      import: 'AssafCheckboxModule',
      from: 'assaf-prime-lib/@components/@checkbox',
    },
  ]),
  htmlUse: `<form [formGroup]="form">
  <assaf-checkbox
    controlName="data"
    [data]="categories"
  ></assaf-checkbox>
</form>`,
};
