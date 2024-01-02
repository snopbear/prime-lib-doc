import { createBasicClass, createImport } from '@factories/index';

export const installSlider = {
  import: createImport([
    { import: 'assafSliderModule', from: 'assaf-prime-lib/@components/@slider' },
  ]),
  htmlUse: `<form [formGroup]="form" >
  <assaf-slider controlName="number" [stars]="20"></assaf-slider>
</form>`,
  tsCode: createBasicClass(
    [],
    `<p><span style="font-size: 12pt;"><span style="color: #3598db;">constructor</span>(<span style="color: #b96ad9;">private </span>_fb:<span style="color:  #2dc26b">FormBuilder</span>){}</span></p>
    <div><span style="color: #3598db;"> form</span>: <span style="color: #2dc26b;">FormGroup </span>= this.<span style="color: #000000;">_fb</span>.<span style="color: #3598db;">group</span>({ <span style="color: #3598db;">number</span>: [40] })</div>`
  ),
  htmlTwoWay:
    '<assaf-slider (valueChange)="newValue($event)" [value]="val"> </assaf-slider>',
};
