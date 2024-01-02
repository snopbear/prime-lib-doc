import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AssafDropdownModule } from 'assaf-prime-lib/@components/@dropdown';
import { SharedModule } from '@shared-module/shared.module';
import { data, dropdownsTypes } from '../data';
import { FormInputErrors } from 'assaf-prime-lib/models';

@Component({
  standalone: true,
  selector: 'assaf-documentation-dropdown-example',
  templateUrl: './dropdown-example.component.html',
  styleUrls: ['./dropdown-example.component.scss'],
  imports: [AssafDropdownModule, SharedModule, RouterModule],
})
export class DropdownExampleComponent {
  //#region Declarations
  get dropdownsTypes() {
    return dropdownsTypes;
  }
  get data() {
    return data;
  }
  errors!: FormInputErrors;
  form: FormGroup = this._fb.group({
    control: [],
    control2: ['', Validators.required],
  });
  //#endregion Declarations
  //#region Lifecycle
  constructor(private _fb: FormBuilder) {
    this.errors = {
      required: 'This Input is required',
    };
  }
  //#endregion Lifecycle
}
