import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { AssafFieldSetModule } from 'assaf-prime-lib/@components/@fieldset';
import { fieldSetArray } from '../data';

@Component({
  selector: 'assaf-documentation-fieldset-example',
  templateUrl: './fieldset-example.component.html',
  styleUrls: ['./fieldset-example.component.scss'],
  standalone: true,
  imports: [SharedModule, AssafFieldSetModule],
})
export class FieldsetExampleComponent {
  get fieldSetData(): any {
    return fieldSetArray;
  }
}
