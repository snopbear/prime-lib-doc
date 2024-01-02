import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { RatingInstall } from '../data';
import { PropertiesRatingComponent } from '../properties-rating/properties-rating.component';

@Component({
  standalone: true,
  imports: [PropertiesRatingComponent, SharedModule],
  selector: 'assaf-documentation-rating-install',
  templateUrl: './rating-install.component.html',
  styleUrls: ['./rating-install.component.scss'],
})
export class RatingInstallComponent {
  get install() {
    return RatingInstall;
  }
}
