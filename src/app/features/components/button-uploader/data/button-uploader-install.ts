import { createImport } from '@factories/index';

export const uploadButtonInstall = {
  import: createImport([
    {
      import: 'AssafButtonUploaderModule',
      from: 'assaf-prime-lib/@components/@button-uploader',
    },
  ]),
  htmlUse: `<assaf-button-uploader
  (onChange)="fileChanged($event)"
  label="Upload"
>
</assaf-button-uploader>`,
};
