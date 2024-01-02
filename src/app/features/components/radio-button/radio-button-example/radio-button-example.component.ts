import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssafRadioButtonModule } from 'assaf-prime-lib/@components/@radio-button';
import { RadioButtonData } from '../data/index';
import { FormInputErrors, GeneralItem } from 'assaf-prime-lib/models';
import { DisplayService } from 'assaf-prime-lib/services';

@Component({
  standalone: true,
  imports: [SharedModule, AssafRadioButtonModule],
  selector: 'assaf-documentation-radio-button-example',
  templateUrl: './radio-button-example.component.html',
  styleUrls: ['./radio-button-example.component.scss'],
})
export class RadioButtonExampleComponent {
  //#region Declerations
  // object contains your error message
  errors: FormInputErrors = {
    required: 'Please Select Color',
  };
  get radioButtonsData() {
    return RadioButtonData.radioButtonsData;
  }

  // Array of radio buttons items
  get data(): Array<GeneralItem> {
    return RadioButtonData.data;
  }

  // Create form group to conatin the radio Buttons
  form: FormGroup = this._fb.group({
    color: [],
    ColorWithErrorHandel: ['', Validators.required],
  });
  //#endregion Declerations

  // DisplayService is is a service used to display toast/messages
  constructor(private _fb: FormBuilder, private toaster: DisplayService) {}

  //#region Methods

  // Create a method that handel errors
  submitForm() {
    const formStatus = this.form.valid;
    const value = this.form.get('ColorWithErrorHandel')?.value;
    if (formStatus) {
      this.toaster.displayToast('success', 'Selected value is : ', value);
    } else {
      this.toaster.displayToast('error', 'Please Select Value');
    }
  }

  // function to  show selected value
  showSelected() {
    const value = this.form.get('color')?.value;
    this.toaster.displayToast('success', 'Selected value is : ', value);
  }
  //#endregion Method
}
