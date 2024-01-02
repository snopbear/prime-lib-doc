import { createImport } from '@factories/index';

export const inputIntall = {
  import: createImport([
    {
      import: 'AssafInputModule',
      from: 'assaf-prime-lib/@components/@input',
    },
  ]),
  tsUse:
    '<div><span style="color: rgb(61, 142, 185);">form</span>: <span style="color: rgb(0, 168, 133);">FormGroup</span> = <span style="color: rgb(41, 105, 176);">this</span>.<span style="color: rgb(41, 105, 176);">_fb</span>.<span style="color: rgb(251, 160, 38);">group</span>({<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; basic</span>: [ ,&nbsp;<span style="color: rgb(0, 168, 133);">Validators</span>.<span style="color: rgb(251, 160, 38);">required</span> ],<br>&nbsp; });<br><br><span style="color: rgb(41, 105, 176);">constructor</span>(<span style="color: rgb(41, 105, 176);">private</span> <span style="color: rgb(61, 142, 185);">_fb</span>: <span style="color: rgb(0, 168, 133);">FormBuilder</span>) {}</div>',
  htmlUse: `<form [formGroup]="form">
  <assaf-input controlName="basic" label="Basic Input"></assaf-input>
</form>`,
};
