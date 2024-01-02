import { createImport } from '@factories/index';

export const ChipInstall = {
  import: createImport([
    {
      import: 'AssafChipModule',
      from: 'assaf-prime-lib/@components/@chip',
    },
  ]),
  usage: `<assaf-chip label="mohamed"></assaf-chip>`,
};
