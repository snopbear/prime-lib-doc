import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { CheckboxPropertiesComponent } from '../checkbox-properties/checkbox-properties.component';
import { checkboxExamples, CheckBoxInstall } from '../data';

@Component({
  standalone: true,
  imports: [SharedModule,CheckboxPropertiesComponent],
  selector: 'assaf-documentation-checkbox-install',
  templateUrl: './checkbox-install.component.html',
  styleUrls: ['./checkbox-install.component.scss']
})
export class CheckboxInstallComponent {
  get install() {
    return CheckBoxInstall;
  }
  get examples() {
    return checkboxExamples;
  }
}
