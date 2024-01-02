import { Component } from '@angular/core';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss'],
})
export class KnobComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../knob-install/knob-install.component').then(
          (component) => component.KnobInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../knob-example/knob-example.component').then(
          (component) => component.KnobExampleComponent
        ),
    },
  ];
}
