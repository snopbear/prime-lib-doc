import { Component } from '@angular/core';
import { TabViewItem } from 'assaf-prime-lib/@components/@tabview';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'Installation',
      leftIcon: 'pi-download',
      component: () =>
        import('../rating-install/rating-install.component').then(
          (component) => component.RatingInstallComponent
        ),
    },
    {
      header: 'Examples',
      leftIcon: 'pi-info-circle',
      component: () =>
        import('../rating-example/rating-example.component').then(
          (component) => component.RatingExampleComponent
        ),
    },
  ];
}
