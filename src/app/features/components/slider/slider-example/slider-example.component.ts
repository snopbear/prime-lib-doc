import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AssafSliderModule } from 'assaf-prime-lib/@components/@slider';
import { SliderExamples, SliderReactiveExample } from '../data/examples';

@Component({
  selector: 'assaf-documentation-slider-example',
  standalone: true,
  imports: [SharedModule, AssafSliderModule],
  templateUrl: './slider-example.component.html',
  styleUrls: ['./slider-example.component.scss'],
})
export class SliderExampleComponent {
  basicVal: number = 40;
  stepVal: number = 10;
  verticalVal: number = 50;
  rangeVal: any = [0, 60];

  get SliderExamples() {
    return SliderExamples;
  }

  get SliderReactiveExample() {
    return SliderReactiveExample;
  }

  constructor(private _fb: FormBuilder) {}
  _form: FormGroup = this._fb.group({
    age: [40],
  });

  ngOnInit(): void {}

  newValue(event: any, type: string) {
    if (type == 'basicVal') {
      this.basicVal = event;
    } else if (type == 'stepVal') {
      this.stepVal = event;
    } else if (type == 'verticalVal') {
      this.verticalVal = event;
    } else if (type == 'rangeVal') {
      this.rangeVal = event;
    }
  }

  newValueReactiveForm() {
    return this._form.get('age')?.value;
  }
}
