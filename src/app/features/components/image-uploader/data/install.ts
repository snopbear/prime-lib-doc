import { createImport } from '@factories/index';

export const imageUploadInstall = {
  import: createImport([
    {
      import: 'AssafImageUploaderModule',
      from: '@assaf-garage/assaf-core-library/components/@image-uploader',
    },
  ]),
  normal: {
    htmlUse:
      '<assaf-image-uploader (onChange)="fileSelected($event)"></assaf-image-uploader>',
  },
  form: {
    htmlUse: `<form [formGroup]="form">
    <assaf-image-uploader controlName="file"> </assaf-image-uploader>
  </form>`,
    tsUse:
      '<div><span style="color: rgb(61, 142, 185);">form</span>: <span style="color: rgb(0, 168, 133);">FormGroup</span> = <span style="color: rgb(41, 105, 176);">this</span>.<span style="color: rgb(41, 105, 176);">_fb</span>.<span style="color: rgb(251, 160, 38);">group</span>({<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; basic</span>: [ ,&nbsp;<span style="color: rgb(0, 168, 133);">Validators</span>.<span style="color: rgb(251, 160, 38);">required</span> ],<br>&nbsp; });<br><br><span style="color: rgb(41, 105, 176);">constructor</span>(<span style="color: rgb(41, 105, 176);">private</span> <span style="color: rgb(61, 142, 185);">_fb</span>: <span style="color: rgb(0, 168, 133);">FormBuilder</span>) {}</div>',
  },
};
