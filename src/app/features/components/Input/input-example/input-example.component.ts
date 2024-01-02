import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '@shared-module/shared.module';
import { InputExamples } from '../data/examples';
import { FormInputErrors } from 'assaf-prime-lib/models';
import { DisplayService } from 'assaf-prime-lib/services';

@Component({
  standalone: true,
  selector: 'assaf-documentation-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.scss'],
  imports: [SharedModule],
})
export class InputExampleComponent {
  get InputExamples() {
    return InputExamples;
  }

  emailErrors: FormInputErrors = {
    required: '*email Is Required',
    email: 'Wrong email format',
  };

  form: FormGroup = this._fb.group({
    floatLabel: [],
    email: [, [Validators.required, Validators.email]],
    withIcon: [],
    basic: [],
    password: [],
    chip: [],
    size: [],
  });

  constructor(private _fb: FormBuilder, public toastService: DisplayService) {}

  clicked(control: string) {
    navigator.clipboard.writeText(this.form.controls[control].value);
    this.toastService.displayToast('info', 'Copied to clipboard');
  }
}
