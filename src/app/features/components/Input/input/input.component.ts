import { Component } from '@angular/core';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  standalone: true,
  selector: 'assaf-documentation-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [SharedModule],
})
export class InputComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../input-install/input-install.component').then(
          (component) => component.InputInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../input-example/input-example.component').then(
          (component) => component.InputExampleComponent
        ),
    },
  ];
}
