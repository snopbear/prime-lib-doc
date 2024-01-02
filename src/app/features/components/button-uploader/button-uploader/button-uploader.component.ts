import { Component } from '@angular/core';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  standalone: true,
  selector: 'assaf-documentation-button-uploader',
  templateUrl: './button-uploader.component.html',
  styleUrls: ['./button-uploader.component.scss'],
  imports: [SharedModule],
})
export class ButtonUploaderComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import(
          '../button-uploader-install/button-uploader-install.component'
        ).then((component) => component.ButtonUploaderInstallComponent),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import(
          '../button-uploader-examples/button-uploader-examples.component'
        ).then((component) => component.ButtonUploaderExamplesComponent),
    },
  ];
}
