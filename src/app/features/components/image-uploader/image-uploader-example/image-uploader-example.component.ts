import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AssafImageUploaderModule } from 'assaf-prime-lib/@components/@image-uploader';
import { AssafButtonModule } from 'assaf-prime-lib/@components/@button';
import { SharedModule } from '@shared-module/shared.module';
import { imageUploaderData } from '../data';
import { DisplayService } from 'assaf-prime-lib/services';
@Component({
  selector: 'assaf-documentation-image-uploader-example',
  templateUrl: './image-uploader-example.component.html',
  styleUrls: ['./image-uploader-example.component.scss'],
  standalone: true,
  imports: [AssafButtonModule, SharedModule, AssafImageUploaderModule],
})
export class ImageUploaderExampleComponent {
  constructor(private __fb: FormBuilder, public toastService: DisplayService) {}
  get data(): any {
    return imageUploaderData;
  }
  form: FormGroup = this.__fb.group({
    file: [],
  });
  uploadImage() {
    if (!this.form.controls['file'].value) {
      this.toastService.displayToast('error', 'plz upload image! 🤔❌');
    } else {
      this.toastService.displayToast('success', 'image Loaded Succefully! 👍');
    }
  }
}
