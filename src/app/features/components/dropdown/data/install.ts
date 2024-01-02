import { createBasicClass, createImport } from '@factories/index';

export const installDropdown = {
  desc: '',
  import: createImport([
    {
      import: 'AssafDropdownModule',
      from: '@assaf-garage/assaf-core-library/components/@dropdown',
    },
  ]),
  usage: {
    html: `<form [formGroup]='form'>
    <assaf-dropdown [data]='data' controlName='formControl'></assaf-dropdown>
</form>`,
    ts: createBasicClass(
      [
        { import: 'FormBuilder, FormGroup', from: '@angular/forms' },
        { import: 'DropDownItem', from: '@assaf-garage/assaf-core-library' },
      ],
      `<p><span style="color: rgb(65, 168, 95);">&nbsp; &nbsp; data</span>: <span style="color: rgb(65, 168, 95);">Array</span> &lt;&nbsp;<span style="color: rgb(85, 57, 130);">DropDownItem</span> &gt; = [<br> &nbsp; &nbsp; &nbsp; { <span style="color: rgb(41, 105, 176);">key</span>: &apos;Egypt&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;EG&apos;},<br> &nbsp; &nbsp; &nbsp; { <span style="color: rgb(41, 105, 176);">key</span>: &apos;France&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;FR&apos;&apos; },<br> &nbsp; &nbsp; &nbsp; { <span style="color: rgb(41, 105, 176);">key</span>: &apos;Saudi-Arabia&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;SA&apos; },<br> &nbsp; &nbsp; &nbsp; { <span style="color: rgb(41, 105, 176);">key</span>: &apos;Iraq&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;IR&apos;},<br> &nbsp; &nbsp; &nbsp; { <span style="color: rgb(41, 105, 176);">key</span>: &apos;Europe&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;EU&apos; }<br>&nbsp; &nbsp; ]<br><span style="color: #b96ad9;">&nbsp; &nbsp;&nbsp;</span><span style="color: rgb(0, 168, 133);">form</span>!:&nbsp;<span style="color: #b96ad9;">FormGroup</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">_fb</span>:&nbsp;<span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;">) {</span><br><span style="color: #169179;">&nbsp; &nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; formControl: [ ],<br> <span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; &nbsp; }</span>);&nbsp;<br><span style="color: #b96ad9;">&nbsp; &nbsp; }</span></p>`
    ),
  },
};
