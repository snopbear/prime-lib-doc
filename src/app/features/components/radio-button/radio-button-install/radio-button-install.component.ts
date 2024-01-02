import { Component } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { RadioButtonInstall } from '../data';
import { RadioButtonPropertiesComponent } from '../radio-button-properties/radio-button-properties.component';

@Component({
  standalone: true,
  imports: [SharedModule,RadioButtonPropertiesComponent],
  selector: 'assaf-documentation-radio-button-install',
  templateUrl: './radio-button-install.component.html',
  styleUrls: ['./radio-button-install.component.scss']
})
export class RadioButtonInstallComponent {
  get install() {
    return RadioButtonInstall;
  }
}
