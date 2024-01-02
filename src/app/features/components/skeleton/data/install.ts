import { createImport } from '@factories/index';

export const SkeletonInstall = {
  desc: '',
  import: createImport([
    {
      import: 'AssafSkeletonModule',
      from: 'assaf-prime-lib/@components/@skeleton',
    },
  ]),
  usage: {
    htmlUse: `<assaf-skeleton width="5rem"></assaf-skeleton>`,
  },
};
