import { Component } from '@angular/core';
import { AssafKnobModule } from 'assaf-prime-lib/@components/@knob';
import { SharedModule } from '@shared-module/shared.module';
import { examplesText } from '../data/properties';

@Component({
  standalone: true,
  imports: [SharedModule, AssafKnobModule],
  selector: 'assaf-documentation-knob-example',
  templateUrl: './knob-example.component.html',
  styleUrls: ['./knob-example.component.scss'],
})
export class KnobExampleComponent {
  number: number = 40;
  get examples() {
    return examplesText;
  }
}
