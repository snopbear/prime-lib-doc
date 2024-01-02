import { Component } from '@angular/core';
import {
  AssafTabviewModule,
  TabViewItem,
} from 'assaf-prime-lib/@components/@tabview';
@Component({
  selector: 'assaf-documentation-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
  standalone: true,
  imports: [AssafTabviewModule],
})
export class ImageUploaderComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import(
          '../image-uploader-install/image-uploader-install.component'
        ).then((component) => component.ImageUploaderInstallComponent),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import(
          '../image-uploader-example/image-uploader-example.component'
        ).then((component) => component.ImageUploaderExampleComponent),
    },
  ];
}
