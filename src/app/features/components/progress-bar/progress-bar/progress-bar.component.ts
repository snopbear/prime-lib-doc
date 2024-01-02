import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';

@Component({
  selector: 'assaf-documentation-progress-bar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../progress-bar-install/progress-bar-install.component').then(
          (component) => component.ProgressBarInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../progress-bar-example/progress-bar-example.component').then(
          (component) => component.ProgressBarExampleComponent
        ),
    },
  ];
}
