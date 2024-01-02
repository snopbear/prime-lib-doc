import { createImport } from '@factories/index';

export const ImageInstall: Image = {
  import: createImport([
    {
      import: 'AssafSkeletonModule',
      from: 'assaf-prime-lib/@components/@image',
    },
  ]),
  htmlBasic: `<assaf-image src="assets/image/galleria.jpg" width="250"></assaf-image>`,
};
export interface Image {
  import: string;
  htmlBasic: string;
}
