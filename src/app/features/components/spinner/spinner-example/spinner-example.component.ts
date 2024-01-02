import { Component } from '@angular/core';
import { AssafProgressSpinnerModule } from 'assaf-prime-lib/@components/@progress-spinner';
import { SharedModule } from '@shared-module/shared.module';
import { spinnerExample } from '../data/examples';

@Component({
  standalone: true,
  imports: [SharedModule, AssafProgressSpinnerModule],
  selector: 'assaf-documentation-spinner-example',
  templateUrl: './spinner-example.component.html',
  styleUrls: ['./spinner-example.component.scss'],
})
export class SpinnerExampleComponent {
  get examples() {
    return spinnerExample;
  }
}
