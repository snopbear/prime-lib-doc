import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { ImageInstall } from '../data';

@Component({
  standalone: true,
  selector: 'assaf-documentation-image-install',
  templateUrl: './image-install.component.html',
  styleUrls: ['./image-install.component.scss'],
  imports: [SharedModule],
})
export class ImageInstallComponent {
  
  get install() {
    return ImageInstall;
  }
}
