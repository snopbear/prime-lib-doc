import { createImport } from '@factories/index';

export const carouselInstall = {
  import: createImport([
    {
      import: 'AssafCarouselModule',
      from: '@assaf-garage/assaf-core-library/components/@carousel',
    },
  ]),
  htmlUse: `<assaf-carousel [data]="images" [numVisible]="1">
  <ng-template let-item>
    <p>Hello World</p>
  </ng-template>
</assaf-carousel>`,
  tsUse: '',
};
