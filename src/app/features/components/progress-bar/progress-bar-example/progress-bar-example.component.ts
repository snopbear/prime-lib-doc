import { Component } from '@angular/core';
import { AssafProgressBarModule } from 'assaf-prime-lib/@components/@progress-bar';
import { SharedModule } from '@shared-module/shared.module';
import { progressBarExample } from '../data';

@Component({
  selector: 'assaf-documentation-progress-bar-example',
  standalone: true,
  imports: [SharedModule, AssafProgressBarModule],
  templateUrl: './progress-bar-example.component.html',
  styleUrls: ['./progress-bar-example.component.scss'],
})
export class ProgressBarExampleComponent {
  get examples() {
    return progressBarExample;
  }
}
