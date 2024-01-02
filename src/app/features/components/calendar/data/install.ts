import { createImport } from '@factories/index';

export const CalendarInstall = {
  import: createImport([
    {
      import: 'AssafCalendarModule',
      from: 'assaf-prime-lib/@components/@calendar',
    },
  ]),
  usage: {
    html: `<form [formGroup]='form'>
    <assaf-calendar controlName='formControl'></assaf-calendar>
</form>`,
    ts: `<p><span style="color: #b96ad9;">import</span>  {<span style="color: #169179;"> FormBuilder, FormGroup, Validators </span>} <span style="color: #b96ad9;">from</span> <span style="color: #e03e2d;"> '@angular/forms'</span>;
<span style="color: #169179;">@Component</span><span style="color: #b96ad9;">({</span>
...
<span style="color: #b96ad9;">})</span>
<span style="color: #b96ad9;">export</span> <span style="color: #3598db;">class</span>  <span style="color: #169179;">YourComponent</span> {
<p><span style="color: #3598db;">    form</span>!: <span style="color: #169179;">FormGroup</span>; 
<p><span style="color: #b96ad9;">    constructor (private </span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span>
    <span style="color: #169179;">  this.form</span> = this._fb.group({
          formControl: [],
      });
    }
}`,
  },
};
