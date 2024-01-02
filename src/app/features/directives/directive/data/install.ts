import { createImport } from '@factories/index';

export const directiveInstall: Directives = {
  importArabic: createImport([
    {
      import: 'ArabicOnlyDirective',
      from: '/directives',
    },
  ]),
  importEnglish: createImport([
    {
      import: 'EnglishOnlyDirective',
      from: 'assaf-prime-lib/directives',
    },
  ]),
  importEnglishWithout: createImport([
    {
      import: 'EnglishWithoutSpaceDirective',
      from: 'assaf-prime-lib/directives',
    },
  ]),
  importBlockCopy: createImport([
    {
      import: 'BlockCopyDirective',
      from: 'assaf-prime-lib/directives',
    },
  ]),
  importBlockCut: createImport([
    {
      import: 'BlockCutDirective',
      from: 'assaf-prime-lib/directives',
    },
  ]),
  importBlockPaste: createImport([
    {
      import: 'BlockPasteDirective',
      from: 'assaf-prime-lib/directives',
    },
  ]),
};
export interface Directives {
  importArabic: string;
  importEnglish: string;
  importEnglishWithout: string;
  importBlockCopy: string;
  importBlockCut: string;
  importBlockPaste: string;
}
