import { createBasicClass, getMode } from '@factories/index';
export const calendarExamples = [
  {
    title: 'Basic Calendar',
    ts: createBasicClass(
      [
        {
          import: 'FormBuilder, FormGroup',
          from: '@angular/forms',
        },
      ],
      '<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'
    ),
    html: `<assaf-calendar controlName="formControl" 
    label="Basic Calendar">
</assaf-calendar>`,
  },
  {
    title: 'Flaot label',
    floatLabel: true,
    ts: createBasicClass(
      [
        {
          import: 'FormBuilder, FormGroup',
          from: '@angular/forms',
        },
      ],
      '<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'
    ),
    html: `<assaf-calendar controlName="formControl" 
    label="Flaot label" [floatLabel]="true">
</assaf-calendar>`,
  },
  {
    title: 'Editable Calendar',
    readOnly: false,
    floatLabel: true,
    ts: createBasicClass(
      [
        {
          import: 'FormBuilder, FormGroup',
          from: '@angular/forms',
        },
      ],
      '<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'
    ),
    html: `<assaf-calendar controlName="formControl" 
    [readOnly]="false" placeholder="Pick date" 
    label="Editable calendar" [floatLabel]="true">
</assaf-calendar>`,
  },
  {
    title: 'Calendar with weeks',
    showWeeks: true,
    floatLabel: true,
    ts: createBasicClass(
      [
        {
          import: 'FormBuilder, FormGroup',
          from: '@angular/forms',
        },
      ],
      '<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'
    ),
    html: `<assaf-calendar controlName="formControl" 
    [showWeeks]="true"
    label="Calendar with weeks"
    placeholder="Pick date" [floatLabel]="true">
</assaf-calendar>`,
  },
  {
    title: 'Calendar with icon',
    showButtons: true,
    showCalendarIcon: true,
    floatLabel: true,
    ts: createBasicClass(
      [
        {
          import: 'FormBuilder, FormGroup',
          from: '@angular/forms',
        },
      ],
      '<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'
    ),
    html: `<assaf-calendar controlName="formControl"  
    [showButtons]="true" [showCalendarIcon]="true"
    placeholder="Pick date" 
    label="Pick date" [floatLabel]="true">
</assaf-calendar>`,
  },
];
export const caledarModes = [
  {
    title: 'Time Calendar Mode',
    label: 'Pick Time',
    mode: getMode('time'),
    ts: createBasicClass(
      [
        {
          import: 'FormBuilder, FormGroup',
          from: '@angular/forms',
        },
      ],
      '<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'
    ),
    html: `<assaf-calendar controlName="formControl" label="Pick Time"
    mode="time" palceholder="Pick Time">
</assaf-calendar>`,
  },
  {
    title: 'Month Calendar Mode',
    label: 'Pick Month',
    mode: getMode('month'),
    ts: createBasicClass(
      [
        {
          import: 'FormBuilder, FormGroup',
          from: '@angular/forms',
        },
      ],
      '<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'
    ),
    html: `<assaf-calendar controlName="formControl" label="Pick Month" 
    mode="month" placeholder="Pick Month" 
    [floatLabel]="true">
</assaf-calendar>`,
  },
  {
    title: 'Year Calendar Mode',
    mode: getMode('year'),
    label: 'Pick Year',
    ts: createBasicClass(
      [
        {
          import: 'FormBuilder, FormGroup',
          from: '@angular/forms',
        },
      ],
      '<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'
    ),
    html: `<assaf-calendar controlName="formControl" 
     mode="year" placeholder="Pick Year" 
     label="Pick Year" [floatLabel]="true">
</assaf-calendar>`,
  },
  {
    title: 'Date Time Format Calender Mode',
    label: 'Pick Date',
    mode: getMode('date-time'),
    ts: createBasicClass(
      [
        {
          import: 'FormBuilder, FormGroup',
          from: '@angular/forms',
        },
      ],
      '<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'
    ),
    html: `<assaf-calendar controlName="formControl" 
     mode="date-time" placeholder="Pick Date" 
     label="Pick Date" [floatLabel]="true">
</assaf-calendar>`,
  },
  {
    title: 'Range picker Calendar Mode',
    mode: getMode('range'),
    label: 'Range Picker',
    ts: createBasicClass(
      [
        {
          import: 'FormBuilder, FormGroup',
          from: '@angular/forms',
        },
      ],
      '<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</span>'
    ),
    html: `<assaf-calendar controlName="formControl"  
    mode="range" placeholder="Range Picker" 
    label="Range Picker" [floatLabel]="true">
</assaf-calendar>`,
  },
];
export const calendars = {
  date: createBasicClass(
    [
      {
        import: 'FormBuilder, FormGroup',
        from: '@angular/forms',
      },
    ],
    `<p><span style="color: #3598db;">&nbsp; &nbsp; form</span>!:&nbsp;<span style="color: #169179;">FormGroup</span>;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; today</span>:<span style="color: rgb(65, 168, 95);">Date</span> = new&nbsp;<span style="color: rgb(243, 121, 52);">Date()</span>;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; minDate</span>:<span style="color: rgb(65, 168, 95);">Date</span> = new<span style="color: rgb(243, 121, 52);">&nbsp;Date()</span>;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; maxDate</span>:<span style="color: rgb(65, 168, 95);">Date</span> = new<span style="color: rgb(243, 121, 52);">&nbsp;Date()</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span> <span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; formControl</span>: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br><span style='color: rgb(41, 105, 176); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;'>&nbsp; &nbsp;  this.maxDate</span><span style='color: rgb(0, 0, 0); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>.</span><span style='color: rgb(243, 121, 52); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;'>setDate(</span><span style='color: rgb(41, 105, 176); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;'>this.today</span><span style='color: rgb(0, 0, 0); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>.</span><span style='color: rgb(243, 121, 52); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;'>getDate()</span><span style='color: rgb(0, 0, 0); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>&nbsp;+ 2</span><span style='color: rgb(243, 121, 52); font-family: "Times New Roman"; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;'>)</span><br>&nbsp; &nbsp; }</span>`
  ),
  minCalendar: {
    title: 'Calendar With Min Date',
    label: 'Min',
    html: `<assaf-calendar controlName="formControl" 
    [minDate]="minDate"
    mode="min-max"
    label="Min" [floatLabel]="true">
</assaf-calendar>`,
  },
  maxCalendar: {
    title: 'Calendar With Max Date',
    label: 'Max',
    html: `<assaf-calendar controlName="formControl" 
    mode="min-max"
    [maxDate]="maxDate"
    label='Max' [floatLabel]="true">
</assaf-calendar>`,
  },
  minMax: {
    title: 'Calendar With Min-Max Date',
    label: 'Min-Max',
    html: `<assaf-calendar controlName="formControl" 
    [minDate]="minDate"
    [maxDate]="maxDate"
    mode="min-max"
    label="Min-Max" [floatLabel]="true">
</assaf-calendar>`,
  },
  errorHandel: {
    ts: createBasicClass(
      [
        {
          import: 'FormBuilder, FormGroup, Validators',
          from: '@angular/forms',
        },
        { import: 'FormInputErrors', from: '@assaf-garage/assaf-core-library' },
      ],
      `<span style="color: #3598db;">   errors!</span>: <span style="color: #b96ad9;">FormInputErrors</span>;
   <span style="color: #3598db;">form</span>!: <span style="color: #b96ad9;">FormGroup</span>; 
    <p><span style="color: rgb(85, 57, 130);" >   constructor (private </span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span>
        <span style="color: #169179;">this.form</span> = this._fb.group({
            control2: ['', Validators.required],
        });
        <span style="color: #169179;">this.errors</span> = {
            required: 'This Input is required',
        };
    <span style="color: #b96ad9;">}</span>`
    ),
    title: 'Calendar With Error Hadle',

    html: `<assaf-calendar controlName="control2"
    label="Calendar With Error Hadle" [floatLabel]="true">
</assaf-calendar>`,
  },
};
