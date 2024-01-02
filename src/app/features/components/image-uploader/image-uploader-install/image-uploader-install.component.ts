import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { imageUploadInstall } from '../data';
import { ImageUploaderPropertiesComponent } from '../image-uploader-properties/image-uploader-properties.component';

@Component({
  selector: 'assaf-documentation-image-uploader-install',
  templateUrl: './image-uploader-install.component.html',
  styleUrls: ['./image-uploader-install.component.scss'],
  standalone: true,
  imports: [SharedModule, ImageUploaderPropertiesComponent],
})
export class ImageUploaderInstallComponent {
  get install() {
    return imageUploadInstall;
  }
}
