import { createBasicClass } from '@factories/index';

export const checkboxExamples = {
  basic: {
    title: 'Dynamic Values',
    htmlUse: `<form [formGroup]="form">
    <assaf-checkbox class="checkbox" 
        controlName='category' [data]="categories">
    </assaf-checkbox>
</form>`,

    tsUse: createBasicClass(
      [
        {
          import: 'FormBuilder, FormGroup, Validators',
          from: '@angular/forms',
        },
        { import: 'GeneralItem', from: 'assaf-prime-lib/models' },
      ],
      `<p><p><span style="color: #169179;">  categories</span> : <span style="color: #169179;">Array &lt;GeneralItem&gt;</span> = [
    { <span style='color: rgb(61, 142, 185)'>key</span>: <span>'Accounting'</span>  , <span style='color:rgb(61, 142, 185)'>value</span>: <span>'A'</span> },
    { <span style='color: rgb(61, 142, 185)'>key</span>: <span>'Marketing'</span>, <span style='color:rgb(61, 142, 185)'>value</span>: <span>'M'</span> },
    { <span style='color: rgb(61, 142, 185)'>key</span>: <span>'Production'</span>, <span style='color:rgb(61, 142, 185)'>value</span>: <span>'P'</span> },
    { <span style='color: rgb(61, 142, 185)'>key</span>: <span>'Research'</span> , <span style='color:rgb(61, 142, 185)'>value</span>: <span>'R'</span> },
   ]
</span>
<span style="color: rgb(61, 142, 185);">  form</span>!: <span style="color: #169179;">FormGroup</span>; 
<p><span style="color: #b96ad9;">  constructor (private </span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span>
    <span style="color: #169179;">this.form</span> = this._fb.group({
        category: [],
        });
    }</p>`
    ),
  },
  twoWay: {
    title: 'Two Way Binding',
    htmlUse: `<assaf-checkbox  
    [value]="checked" 
    [data]="categories" 
    class="checkbox" >
</assaf-checkbox>
`,

    tsUse: createBasicClass(
      [{ import: 'GeneralItem', from: 'assaf-prime-lib/models' }],
      `<p><span><span style="color: rgb(61, 142, 185);">  checked</span> : <span style="color: #169179;">string</span> = 'A';</span>
<p><span style="color: #169179;">  categories</span> : <span style="color: #169179;">Array &lt;GeneralItem&gt;</span> = [
    { <span style='color: rgb(61, 142, 185)'>key</span>: <span>'Accounting'</span>  , <span style='color:rgb(61, 142, 185)'>value</span>: <span>'A'</span> },
    { <span style='color: rgb(61, 142, 185)'>key</span>: <span>'Marketing'</span>, <span style='color:rgb(61, 142, 185)'>value</span>: <span>'M'</span> },
    { <span style='color: rgb(61, 142, 185)'>key</span>: <span>'Production'</span>, <span style='color:rgb(61, 142, 185)'>value</span>: <span>'P'</span> },
    { <span style='color: rgb(61, 142, 185)'>key</span>: <span>'Research'</span> , <span style='color:rgb(61, 142, 185)'>value</span>: <span>'R'</span> },
  ]
</span>`
    ),
  },
};
