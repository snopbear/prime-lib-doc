import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { hotjarSteps } from '../../data';

@Component({
  selector: 'assaf-documentation-hotjar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './hotjar.component.html',
  styleUrls: ['./hotjar.component.scss'],
})
export class HotjarComponent {
  get steps() {
    return hotjarSteps;
  }
}
