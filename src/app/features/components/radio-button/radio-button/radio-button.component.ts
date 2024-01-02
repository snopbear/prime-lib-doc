import { Component } from '@angular/core';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../radio-button-install/radio-button-install.component').then(
          (component) => component.RadioButtonInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../radio-button-example/radio-button-example.component').then(
          (component) => component.RadioButtonExampleComponent
        ),
    },
  ];
}
