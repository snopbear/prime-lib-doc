import { createImport } from '@factories/index';

export const BadgeInstall: Badge = {
  import: createImport([
    {
      import: 'AssafBadgeModule',
      from: 'assaf-prime-lib/@components/@badge',
    },
  ]),
  htmlUse: ` <assaf-badge [value]="10"></assaf-badge> `,
};

export interface Badge {
  import: string;
  htmlUse: string;
}
