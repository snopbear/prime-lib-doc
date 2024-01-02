import { Component } from '@angular/core';
import { gettingStartedSteps } from '../../data/getting-started';

@Component({
  selector: 'assaf-documentation-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent {
  get steps() {
    return gettingStartedSteps;
  }
}
