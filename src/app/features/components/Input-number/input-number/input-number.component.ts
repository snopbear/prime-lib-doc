import { Component } from '@angular/core';
import {
  AssafTabviewModule,
  TabViewItem,
} from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from 'primeng/api';

@Component({
  standalone: true,
  imports: [SharedModule, AssafTabviewModule],
  selector: 'assaf-documentation-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
})
export class InputNumberComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../input-number-install/input-number-install.component').then(
          (component) => component.InputNumberInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../input-number-example/input-number-example.component').then(
          (component) => component.InputNumberExampleComponent
        ),
    },
  ];
}
