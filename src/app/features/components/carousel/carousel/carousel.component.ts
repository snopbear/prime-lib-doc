import { Component } from '@angular/core';
import {
  AssafTabviewModule,
  TabViewItem,
} from 'assaf-prime-lib/@components/@tabview';

@Component({
  selector: 'assaf-documentation-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [AssafTabviewModule],
})
export class CarouselComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../carousel-install/carousel-install.component').then(
          (component) => component.CarouselInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../carousel-example/carousel-example.component').then(
          (component) => component.CarouselExampleComponent
        ),
    },
  ];
}
