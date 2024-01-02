import { Component } from '@angular/core';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  standalone: true,
  selector: 'assaf-documentation-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  imports: [SharedModule],
})
export class BadgeComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../badge-install/badge-install.component').then(
          (component) => component.BadgeInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../badge-example/badge-example.component').then(
          (component) => component.BadgeExampleComponent
        ),
    },
  ];
}
