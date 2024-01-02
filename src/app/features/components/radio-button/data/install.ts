import { createImport } from '@factories/index';

export const RadioButtonInstall = {
  import: createImport([
    {
      import: 'AssafRadioButtonModule',
      from: 'assaf-prime-lib/@components/@radio-button',
    },
  ]),
  htmlUse: `<form [formGroup]="form">
    <assaf-radio-button controlName="color" [data]="data" class="radio" ></assaf-radio-button>
</form> `,

  tsUse: `<p><span style="color: #b96ad9;">import</span>  {<span style="color: #169179;"> FormBuilder, FormGroup, Validators </span>} <span style="color: #b96ad9;">from</span> <span style="color: #e03e2d;"> '@angular/forms'</span>;
<p><span style="color: #b96ad9;">import</span> {<span style="color: #169179;">GeneralItem</span>} <span style="color: #b96ad9;">from</span> <span style="color: #e03e2d;">'@assaf-garage/assaf-core-library/models'</span>;
<span style="color: #169179;">@Component</span><span style="color: #b96ad9;">({</span>
...
<span style="color: #b96ad9;">})</span>
<span style="color: #b96ad9;">export</span> <span style="color: #3598db;">class</span>  <span style="color: #169179;">YourComponent</span> {
<span style="color: #169179;">data</span> : <span style="color: #169179;">Array &lt;GeneralItem&gt;</span> = [
    { key: <span style="color: #e03e2d;">'Red'</span>  , value: <span style="color: #e03e2d;">'1'</span> },
    { key: <span style="color: #e03e2d;">'Green'</span>, value: <span style="color: #e03e2d;">'2'</span> },
    { key: <span style="color: #e03e2d;">'Black'</span>, value: <span style="color: #e03e2d;">'3'</span> },
    { key: <span style="color: #e03e2d;">'Blue'</span> , value: <span style="color: #e03e2d;">'4'</span> },
    { key: <span style="color: #e03e2d;">'White'</span>, value: <span style="color: #e03e2d;">'5'</span> },
    ]
</span>
<span style="color: #169179;">form</span>!: <span style="color: #169179;">FormGroup</span>;
<p><span style="color: #b96ad9;">constructor (private </span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span>
    <span style="color: #169179;">this.form</span> = this._fb.group({
        color: [],
        });
    }
}`,
};
