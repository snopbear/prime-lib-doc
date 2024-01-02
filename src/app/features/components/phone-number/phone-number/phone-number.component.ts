import { Component } from '@angular/core';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  selector: 'assaf-documentation-phone-number',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
})
export class PhoneNumberComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../phone-number-install/phone-number-install.component').then(
          (component) => component.PhoneNumberInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../phone-number-example/phone-number-example.component').then(
          (component) => component.PhoneNumberExampleComponent
        ),
    },
  ];
}
