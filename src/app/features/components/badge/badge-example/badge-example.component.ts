import { badgeExamples } from './../data/index';
import { Component } from '@angular/core';
import { AssafBadgeModule } from 'assaf-prime-lib/@components/@badge';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  standalone: true,
  selector: 'assaf-documentation-badge-example',
  templateUrl: './badge-example.component.html',
  styleUrls: ['./badge-example.component.scss'],
  imports: [AssafBadgeModule, SharedModule],
})
export class BadgeExampleComponent {
  get value() {
    return badgeExamples;
  }
}
