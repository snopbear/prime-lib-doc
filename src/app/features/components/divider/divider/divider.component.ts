import { Component } from '@angular/core';
import {
  AssafTabviewModule,
  TabViewItem,
} from 'assaf-prime-lib/@components/@tabview';

@Component({
  selector: 'assaf-documentation-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
  standalone: true,
  imports: [AssafTabviewModule],
})
export class DividerComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../divider-install/divider-install.component').then(
          (component) => component.DividerInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../divider-example/divider-example.component').then(
          (component) => component.DividerExampleComponent
        ),
    },
  ];
}
