import { Component } from '@angular/core';
import { AssafChipModule } from 'assaf-prime-lib/@components/@chip';
import { SharedModule } from '@shared-module/shared.module';
import { ChipsExample } from '../data';

@Component({
  standalone: true,
  imports: [SharedModule,AssafChipModule],
  selector: 'assaf-documentation-chips-example',
  templateUrl: './chips-example.component.html',
  styleUrls: ['./chips-example.component.scss'],
})
export class ChipsExampleComponent {
  get ChipsExample() {
    return ChipsExample;
  }
}
