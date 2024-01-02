import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DisplayService } from 'assaf-prime-lib/services';
import { SharedModule } from '@shared-module/shared.module';
import {
  badgeBtnExamples,
  iconsBtnExamples,
  severityBtnExamples,
  shapesBtnExamples,
  sizeBtnExamples,
} from '../data/examples';
import { ExampleLoopComponent } from '../example-loop/example-loop.component';

@Component({
  standalone: true,
  selector: 'assaf-documentation-button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.scss'],
  imports: [SharedModule, ExampleLoopComponent],
})
export class ButtonExampleComponent {
  form!: FormGroup;
  get severityBtnExamples() {
    return severityBtnExamples;
  }
  get shapesBtnExamples() {
    return shapesBtnExamples;
  }
  get sizeBtnExamples() {
    return sizeBtnExamples;
  }
  get iconsBtnExamples() {
    return iconsBtnExamples;
  }
  get badgeBtnExamples() {
    return badgeBtnExamples;
  }
  activeMode!: string;
  constructor(private __fb: FormBuilder, public toastService: DisplayService) {}

  ngOnInit(): void {}

  clicked(control: string) {
    navigator.clipboard.writeText(this.form.controls[control].value);
    this.toastService.displayToast('info', 'Copied to clipboard');
  }
  displaySeverity(event: string) {
    this.activeMode = event;
  }
}
