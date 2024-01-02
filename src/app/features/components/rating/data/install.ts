import { createBasicClass, createImport } from '@factories/index';

export const RatingInstall: Rating = {
  import: createImport([
    {
      import: 'AssafRatingModule',
      from: 'assaf-prime-lib/@components/@rating',
    },
  ]),
  htmlUse: `<form [formGroup]="form" >
  <assaf-rating controlName="number" [stars]="20"></assaf-rating>
</form>`,
  ts: createBasicClass(
    [{ import: 'FormBuilder', from: '@angular/forms' }],
    `<div><span style="color: #3598db;">constructor</span>(<span style="color: #b96ad9;">private </span><span style="color: #000000;">_fb</span>: <span style="color: #2dc26b;">FormBuilder</span>) {}</div>
  <div><span style="color: #3598db;"> form</span>: <span style="color: #2dc26b;">FormGroup </span>= this.<span style="color: #000000;">_fb</span>.<span style="color: #3598db;">group</span>({ <span style="color: #3598db;">number</span>: [4] })</div>`
  ),
  htmlTwoWay: `<assaf-rating [value]="value" [stars]="20"></assaf-rating>`,
  tsTwoWay: createBasicClass(
    [],
    `<div><span style="color: #3598db;">value:</span> <span style="color: #2dc26b;">number</span> = 40;</div>`
  ),
};
export interface Rating {
  import: string;
  htmlUse: string;
  ts: string;
  htmlTwoWay: string;
  tsTwoWay: string;
}
