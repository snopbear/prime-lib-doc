import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AssafRatingModule } from 'assaf-prime-lib/@components/@rating';
import { SharedModule } from '@shared-module/shared.module';
import { RatingInstall, textValue } from '../data';

@Component({
  standalone: true,
  imports: [SharedModule, AssafRatingModule],
  selector: 'assaf-documentation-rating-example',
  templateUrl: './rating-example.component.html',
  styleUrls: ['./rating-example.component.scss'],
})
export class RatingExampleComponent {
  value: number = 10;

  constructor(private _fb: FormBuilder) {}
  form: FormGroup = this._fb.group({ number: [4] });
  get examples() {
    return textValue;
  }
  get install() {
    return RatingInstall;
  }
}
