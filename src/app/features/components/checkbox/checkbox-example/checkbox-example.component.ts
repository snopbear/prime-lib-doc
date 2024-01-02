import { Component, OnInit } from '@angular/core';
import { AssafCheckboxModule } from 'assaf-prime-lib/@components/@checkbox';
import { DisplayService } from 'assaf-prime-lib/services';

import { SharedModule } from '@shared-module/shared.module';
import { checkboxExamples, checkboxData } from '../data/index';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { GeneralItem } from 'assaf-prime-lib/models';

@Component({
  standalone: true,
  imports: [SharedModule, AssafCheckboxModule],
  selector: 'assaf-documentation-checkbox-example',
  templateUrl: './checkbox-example.component.html',
  styleUrls: ['./checkbox-example.component.scss'],
})
export class CheckboxExampleComponent implements OnInit {
  //#region Declerations
  get examples() {
    return checkboxExamples;
  }
  //Array of checkbox items
  get categories(): Array<GeneralItem> {
    return checkboxData.categories;
  }
  // Create form containing checkboxs
  form!: FormGroup;
  checked: string = 'A';
  //#endregion Declerations

  //#region Lifecycle
  // DisplayService is is a service used to display toast/messages
  constructor(private display: DisplayService, private _fb: FormBuilder) {
    this.form = this._fb.group({
      category: this._fb.array(
        this.categories.map(() => {
          this._fb.control(false);
        })
      ),
    });
  }
  get categoryController() {
    return this.form.controls['category'] as FormArray;
  }
  ngOnInit() {
    //Subscribing to change event to show selected value
    this.form.controls['category']?.valueChanges
      .pipe(debounceTime(100))
      .subscribe((val: []) => {
        this.display.displayToast('info', 'Value is', String(val.flat(1)));
      });
  }
  //#endregion Lifecycle
  //#region Method
  // function to  show selected value
  showValue(item: GeneralItem) {
    this.display.displayToast('info', 'Value is', item.value);
  }
  //#endregion Method
}
