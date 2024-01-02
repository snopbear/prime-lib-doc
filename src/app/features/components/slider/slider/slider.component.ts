import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared-module/shared.module';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';

@Component({
  selector: 'assaf-documentation-slider',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../slider-install/slider-install.component').then(
          (component) => component.SliderInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../slider-example/slider-example.component').then(
          (component) => component.SliderExampleComponent
        ),
    },
  ];
}
