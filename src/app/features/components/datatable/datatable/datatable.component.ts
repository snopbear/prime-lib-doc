import { Component } from '@angular/core';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  selector: 'assaf-documentation-datatable',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../datatable-install/datatable-install.component').then(
          (component) => component.DatatableInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../datatable-example/datatable-example.component').then(
          (component) => component.DatatableExampleComponent
        ),
    },
  ];
}
