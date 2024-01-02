import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  AssafPhonenumberModule,
  CountryCode,
} from 'assaf-prime-lib/@components/@phone-number';
import { SharedModule } from '@shared-module/shared.module';
import { phoneNumberExample } from '../data/example';
import { FormInputErrors } from 'assaf-prime-lib/models';
import { DisplayService } from 'assaf-prime-lib/services';

@Component({
  selector: 'assaf-documentation-phone-number-example',
  standalone: true,
  imports: [SharedModule, AssafPhonenumberModule],
  templateUrl: './phone-number-example.component.html',
  styleUrls: ['./phone-number-example.component.scss'],
})
export class PhoneNumberExampleComponent {
  form: FormGroup = this.__fb.group({
    basic: [''],
    label: [''],
    countryCode: [''],
  });
  setCountryCode: any;
  constructor(private __fb: FormBuilder, private display: DisplayService) {
    this.setCountryCode = CountryCode.Malawi;
  }

  submit(formControl: string) {
    this.display.displayToast(
      'info',
      'Current Value',
      this.form.value[formControl]
    );
  }
  get examples() {
    return phoneNumberExample;
  }

  notValid: FormInputErrors = {
    pattern: `Mobile Number invalid`,
  };
}
