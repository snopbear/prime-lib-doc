import { createBasicClass } from '@factories/index';

export const dropdownsTypes = [
  {
    name: 'Dropdown with basic label',
    type: 'basic',
    html: `<assaf-dropdown placeholder="Countries" controlName="control" 
    [data]="data" label="Countries">
</assaf-dropdown>`,
  },
  {
    name: 'Dropdown with Floatlabel',
    type: 'floatlabel',
    html: `<assaf-dropdown placeholder="Countries" controlName="control" 
    [floatLabel]="true" label="Countries" [data]="data" >
</assaf-dropdown>`,
  },
  {
    name: 'Dropdown with auto-complete',
    type: 'autoComplete',
    html: `<assaf-dropdown placeholder="Countries" controlName="control"
    [autoComplete]="true" [floatLabel]="true" [data]="data" 
    label="Countries" >
</assaf-dropdown>`,
  },
  {
    name: 'Dropdown with multi-select',
    type: 'multiselect',
    html: `<assaf-dropdown placeholder="Countries" controlName="control"
    [multiSelect]="true" label="Countries" [floatLabel]="true" 
    [data]="data">
</assaf-dropdown>`,
  },
  {
    name: 'Dropdown with search bar',
    type: 'enableFilter',
    html: `<assaf-dropdown placeholder="Countries" controlName="control"
    [enableFilter]="true" label="Countries" [floatLabel]="true" 
    [data]="data">
</assaf-dropdown>`,
  },
  {
    name: 'Dropdown with clear button',
    type: 'showClear',
    html: `<assaf-dropdown placeholder="Countries" controlName="control"
    [showClear]="true" label="Countries" [floatLabel]="true" 
    [data]="data">
</assaf-dropdown>`,
  },

  {
    name: 'Dropdown with chip selection',
    type: 'chipSelection',
    html: `<assaf-dropdown placeholder="Countries" controlName="control"
    multiSelectMode="chip"  [multiSelect]="true" label="Countries" 
    [floatLabel]="true" [data]="data">
</assaf-dropdown>`,
  },
  {
    name: 'Dropdown with flags',
    type: 'withFlags',
    html: `<assaf-dropdown placeholder="Countries" controlName="control"
    mode="text-flag" label="Countries" 
    [floatLabel]="true" [data]="data">
</assaf-dropdown>`,
  },
  {
    name: 'Dropdown with rounded flags',
    type: 'withRoundedFlags',
    html: `<assaf-dropdown placeholder="Countries" controlName="control"
    [roundedFlagIcon]="true" mode="text-flag" label="Countries" 
    [floatLabel]="true" [data]="data">
</assaf-dropdown>`,
  },
  {
    name: 'Dropdown with icons',
    type: 'withIcons',
    html: `<assaf-dropdown placeholder="Countries" controlName="control"
    mode="text-icon" [multiSelect]=true label="Countries" 
    [floatLabel]="true" [data]="data">
</assaf-dropdown>`,
  },

  {
    name: 'Dropdown with Error Handling',
    type: 'handleErrors',
    html: `<assaf-dropdown controlName="control2"
    [controlErrors]="errors" label="Countries" 
    [floatLabel]="true" [data]="data">
</assaf-dropdown>`,
    ts: createBasicClass(
      [
        {
          import: 'FormBuilder, FormGroup, Validators',
          from: '@angular/forms',
        },
        { import: 'FormInputErrors', from: '@assaf-garage/assaf-core-library' },
      ],
      `<p><span style="color: #169179;">&nbsp; &nbsp; </span><span style="color: rgb(0, 168, 133);">errors</span><span style="color: #169179;">!</span>:&nbsp;<span style="color: rgb(147, 101, 184);">FormInputErrors</span>;<br> <span style="color: #b96ad9;">&nbsp;  </span><span style="color: rgb(0, 168, 133);">form</span>!:&nbsp;<span style="color: #b96ad9;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>:&nbsp;<span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{<br>&nbsp; &nbsp; &nbsp; &nbsp; <span style='color:#3598db'>control2</span>: [&apos;&apos;, Validators.required],<br>&nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;&nbsp;<br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.errors</span> = {<br>&nbsp; &nbsp; &nbsp; &nbsp; <span style='color:#3598db'>required</span>: &apos;This Input is required&apos;,&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp;};<br> <span style="color: #b96ad9;">&nbsp; &nbsp; }</span></p>`
    ),
  },
];
