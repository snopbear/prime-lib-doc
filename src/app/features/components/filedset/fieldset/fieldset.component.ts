import { Component } from '@angular/core';
import {
  AssafTabviewModule,
  TabViewItem,
} from 'assaf-prime-lib/@components/@tabview';

@Component({
  selector: 'assaf-documentation-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss'],
  standalone: true,
  imports: [AssafTabviewModule],
})
export class FieldsetComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../fieldset-install/fieldset-install.component').then(
          (component) => component.FieldsetInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../fieldset-example/fieldset-example.component').then(
          (component) => component.FieldsetExampleComponent
        ),
    },
  ];
}
