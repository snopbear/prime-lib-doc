import { createBasicClass, createImport } from '@factories/index';

export const phoneNumberInstall = {
  import: createImport([
    {
      import: 'AssafPhoneNumber',
      from: 'assaf-prime-lib/@components/@phone-number',
    },
  ]),
  htmlUse: `<form [formGroup]="form">
   <assaf-phonenumber controlName="phoneNumber"></assaf-phonenumber>
</form>`,
  tsUse: `<p><span style="color: #b96ad9;">import</span>  {<span style="color: #169179;"> FormBuilder, FormGroup </span>} <span style="color: #b96ad9;">from</span> <span style="color: #e03e2d;"> '@angular/forms'</span>;
<span style="color: #169179;">@Component</span><span style="color: #b96ad9;">({</span>
...
<span style="color: #b96ad9;">})</span>
<span style="color: #b96ad9;">export</span> <span style="color: #3598db;">class</span>  <span style="color: #169179;">YourComponent</span> {
<p><span style="color: #b96ad9;">    constructor (private </span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span>
    <span style="color: #169179;">  this.form</span> = this._fb.group({
      phoneNumber: [],
      });
    }
}`,
};
