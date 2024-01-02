import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssafCalendarModule } from 'assaf-prime-lib/@components/@calendar';
import { SharedModule } from '@shared-module/shared.module';
import { caledarModes, calendarExamples, calendars } from '../data';
import { FormInputErrors } from 'assaf-prime-lib/models';

@Component({
  standalone: true,
  imports: [SharedModule, AssafCalendarModule],
  selector: 'assaf-documentation-calendar-example',
  templateUrl: './calendar-example.component.html',
  styleUrls: ['./calendar-example.component.scss'],
})
export class CalendarExampleComponent implements OnInit {
  //#region Declarations
  minDate!: Date;
  maxDate!: Date;
  errors: FormInputErrors = {
    required: 'This Input is required',
  };
  form: FormGroup = this._fb.group({
    control: [],
    control2: ['', Validators.required],
  });
  get calendarExamples() {
    return calendarExamples;
  }
  get caledarModes() {
    return caledarModes;
  }
  get calendars() {
    return calendars;
  }
  //#endregion Declarations
  //#region Lifecycle
  constructor(private _fb: FormBuilder) {}
  ngOnInit() {
    let today = new Date();
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(today.getDate() + 2);
  }
  //#endregion Lifecycle
}
