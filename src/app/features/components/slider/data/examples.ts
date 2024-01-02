import { createBasicClass } from '@factories/index';
import { SliderProperties } from '@models/interfaces/index';

export let basicVal = 40;
let stepVal = 10;
let verticalVal = 50;
let rangeVal: any = [0, 20];
export const SliderExamples: SliderProperties[] = [
  {
    title: 'Basic',
    value: basicVal,
    htmlCode: `<assaf-slider 
   (valueChange)="newValue($event)" [value]="val">
</assaf-slider>`,
    tsCode: createBasicClass(
      [],
      `<span>&nbsp; &nbsp; val:&nbsp;<span style="color: #2dc26b;">number&nbsp;</span>= 40;<br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; newValue(</span><span style="color: rgb(41, 105, 176);">event</span>: <span style="color: rgb(65, 168, 95);">any</span><span style="color: rgb(243, 121, 52);">)&nbsp;</span>{ &nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; this.val</span> = event; &nbsp;<br>&nbsp; &nbsp; }</span>`
    ),
    orientation: 'horizontal',
    type: 'basicVal',
  },
  {
    title: 'Step',
    value: stepVal,
    step: 10,
    htmlCode: `<assaf-slider 
   (valueChange)="newValue($event)" [value]="val" [step]="10"> 
</assaf-slider>`,
    tsCode: createBasicClass(
      [],
      `<span>&nbsp; &nbsp; val:&nbsp;<span style="color: #2dc26b;">number&nbsp;</span>= 40;<br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; newValue(</span><span style="color: rgb(41, 105, 176);">event</span>: <span style="color: rgb(65, 168, 95);">any</span><span style="color: rgb(243, 121, 52);">)&nbsp;</span>{ &nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; this.val</span> = event; &nbsp;<br>&nbsp; &nbsp; }</span>`
    ),
    orientation: 'horizontal',
    type: 'stepVal',
  },
  {
    title: 'Range',
    range: true,
    value: rangeVal,
    htmlCode: `<assaf-slider [value]="range" 
   [range]="true" (valueChange)="newValue($event)">
</assaf-slider>`,
    tsCode: createBasicClass(
      [],
      `<span>&nbsp; &nbsp; range:&nbsp;<span style="color: #2dc26b;">number&nbsp;</span>= [0,60];<br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; newValue(</span><span style="color: rgb(41, 105, 176);">event</span>: <span style="color: rgb(65, 168, 95);">any</span><span style="color: rgb(243, 121, 52);">)&nbsp;</span>{ &nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; this.range</span> = event; &nbsp;<br>&nbsp; &nbsp; }</span>`
    ),
    orientation: 'horizontal',
    type: 'rangeVal',
  },
  {
    title: 'Vertical',
    value: verticalVal,
    orientation: 'vertical',
    styleClass: 'center',
    htmlCode: `<assaf-slider [value]="verticalVal" 
   [orientation]="vertical" (valueChange)="newValue($event)">
</assaf-slider>`,
    tsCode: createBasicClass(
      [],
      `<span>&nbsp; &nbsp; <span style="color: rgb(41, 105, 176);">verticalVal</span>: <span style="color: #2dc26b;">number&nbsp;</span>=&nbsp; 50;<br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; newValue(</span><span style="color: rgb(41, 105, 176);">event</span>: <span style="color: rgb(65, 168, 95);">any</span><span style="color: rgb(243, 121, 52);">)&nbsp;</span>{ &nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; this.verticalVal</span> = event; &nbsp;<br>&nbsp; &nbsp; }</span>`
    ),
    type: 'verticalVal',
  },
];

export const SliderReactiveExample = {
  htmlCode: `<form [formGroup]="form" >
  <assaf-slider controlName="number">
  </assaf-slider>
</form>`,
  tsCode: createBasicClass(
    [{ import: 'FormBuilder', from: '@angular/forms' }],
    `<span><span style="font-size: 12pt;"><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span>(<span style="color: #b96ad9;">private&nbsp;</span>_fb:<span style="color:  #2dc26b;">FormBuilder</span>){}</span><br><span style="color: #3598db;">&nbsp; &nbsp; form</span>: <span style="color: #2dc26b;">FormGroup&nbsp;</span>= this.<span style="color: #000000;">_fb</span>.<span style="color: rgb(243, 121, 52);">group(</span>{<br> <span style="color: #3598db;">&nbsp; &nbsp; &nbsp; number</span>: [40]&nbsp;<br>&nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span></span>`
  ),
};
