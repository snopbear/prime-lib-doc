import { Component } from '@angular/core';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../chips-install/chips-install.component').then(
          (component) => component.ChipsInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../chips-example/chips-example.component').then(
          (component) => component.ChipsExampleComponent
        ),
    },
  ];
}
