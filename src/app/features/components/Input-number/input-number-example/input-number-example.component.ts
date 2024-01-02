import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { InputNumberExamples } from '../data';
import { AssafInputNumberModule } from 'assaf-prime-lib/@components/@input-number';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInputErrors } from 'assaf-prime-lib/models';
import { DisplayService } from 'assaf-prime-lib/services';

@Component({
  standalone: true,
  imports: [SharedModule, AssafInputNumberModule],
  selector: 'assaf-documentation-input-number-example',
  templateUrl: './input-number-example.component.html',
  styleUrls: ['./input-number-example.component.scss'],
})
export class InputNumberExampleComponent {
  get InputExamples() {
    return InputNumberExamples;
  }
  errors: FormInputErrors = {
    required: 'this filed Is Required',
  };
  form: FormGroup = this._fb.group({
    price: [],
    priceWithErrorControll: [, [Validators.required]],
  });

  constructor(private _fb: FormBuilder, public toastService: DisplayService) {}
}
