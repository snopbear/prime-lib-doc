import { InputProperties } from '@models/interfaces/index';

export const InputExamples: InputProperties[] = [
  {
    title: 'Input with floatlabel',
    label: 'Input with floatlabel',
    controlName: 'floatLabel',
    placeholder: 'Input with floatlabel',
    floatLabel: true,
    htmlCode: `<assaf-input controlName="floatLabel" [floatLabel]="true"
    label="Input with floatlabel" 
    placeholder="Input with floatlabel">
 </assaf-input>`,
  },
  {
    title: 'Input with Icon & float label',
    label: 'Input Icon & float label',
    controlName: 'withIcon',
    placeholder: 'Input with Icon',
    floatLabel: true,
    icon: 'pi-search',
    iconPos: 'left',
    htmlCode: `<assaf-input controlName="withIcon" 
    label="Input with Icon & float label" 
    placeholder="Input with Icon" icon="pi-search" 
    [floatLabel]="true" iconPos="left">
</assaf-input>`,
  },
  {
    title: 'Password Input',
    label: 'Password Input',
    controlName: 'password',
    type: 'password',
    placeholder: 'Password Input',
    floatLabel: true,
    htmlCode: `<assaf-input type="password" controlName="password"
    label="Password Input" placeholder="Password Input"
    [floatLabel]="true">
</assaf-input>`,
  },
  {
    title: 'Password Input with toggle mask',
    type: 'password',
    controlName: 'password',
    label: 'Password Input',
    toggleMask: true,
    placeholder: 'Password Input',
    floatLabel: true,
    htmlCode: `<assaf-input type="password" controlName="password" 
    label="Password Input" [toggleMask]="true" 
    placeholder="Password Input" [floatLabel]="true">
</assaf-input>`,
  },
  {
    title: 'Password Input without toggle mask and feedback',
    type: 'password',
    controlName: 'password',
    label: 'Password Input',
    passwordFeedback: false,
    placeholder: 'Password Input',
    floatLabel: true,
    htmlCode: `<assaf-input type="password" controlName="password" 
    label="Password Input" [passwordFeedback]="false" 
    placeholder="Password Input" [floatLabel]="true">
</assaf-input>`,
  },
  {
    title: 'Chips Input',
    type: 'chips',
    controlName: 'chip',
    label: 'Chips Input',
    placeholder: 'Chips Input',
    floatLabel: true,
    htmlCode: `<assaf-input type="chips" controlName="chip" label="Chips Input" 
    placeholder="Chips Input" [floatLabel]="true">
</assaf-input>`,
  },
  {
    title: 'Different sizes',
    controlName: 'size',
    placeholder: 'Large size',
    label: 'Large size',
    size: 'lg',
    floatLabel: true,
    htmlCode: `<assaf-input controlName="size" placeholder="Large size"
   label="Large size" size="lg" [floatLabel]="true">
</assaf-input>`,
  },
  {
    title: 'Size',
    controlName: 'size',
    placeholder: 'Small size',
    label: 'Small size',
    size: 'sm',
    floatLabel: true,
    htmlCode: `<assaf-input controlName="size" placeholder="Small size"
   label="Small size" size="sm" [floatLabel]="true">
</assaf-input>`,
  },
  {
    title: 'Basic Input',
    controlName: 'basic',
    placeholder: 'Basic Input',
    label: 'Basic  ',
    htmlCode: `<assaf-input controlName="basic" 
    placeholder="Basic Input" label="Basic">
</assaf-input>`,
  },
  {
    title: 'Textarea Input with float label',
    controlName: 'basic',
    floatLabel: true,
    placeholder: 'Textarea Input',
    label: 'Textarea',
    type: 'textarea',
    htmlCode: `<assaf-input type="textarea" controlName="basic"
   label="Textarea" placeholder="Textarea Input" 
   [floatLabel]="true">
</assaf-input>`,
  },
  {
    title: 'Input with Required Error',
    label: 'Email',
    controlErrors: true,
    controlName: 'email',
    placeholder: 'example@email.com',
    floatLabel: true,
    htmlCode: `<assaf-input controlName="floatLabel" [floatLabel]="true"
   label="Input with floatlabel" placeholder="Email" 
   [controlErrors]="emailErrors">
</assaf-input>`,
    tsCode:
      '<div><div>&nbsp; <strong><span style="color: #ba372a;">emailErrors</span></strong>: <span style="color: #169179;">FormInputErrors </span><span style="color: #7e8c8d;">= {</span></div><div><span style="color: #7e8c8d;">&nbsp; &nbsp; <strong>required:</strong> "you Should fill This Input",</span></div><div><span style="color: #7e8c8d;">&nbsp; &nbsp; <strong>email:</strong> "email Is Required",</span></div><div><span style="color: #7e8c8d;">&nbsp; };</span></div></div>',
  },
];
