import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';

@Component({
  selector: 'assaf-documentation-tab-view',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss'],
})
export class TabViewComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../tab-view-install/tab-view-install.component').then(
          (component) => component.TabViewInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../tab-view-example/tab-view-example.component').then(
          (component) => component.TabViewExampleComponent
        ),
    },
  ];
}
