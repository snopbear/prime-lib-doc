import { Component } from '@angular/core';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../image-install/image-install.component').then(
          (component) => component.ImageInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../image-example/image-example.component').then(
          (component) => component.ImageExampleComponent
        ),
    },
  ];
}
