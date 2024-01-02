import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { fieldsetInstall } from '../data';
import { FieldsetPropertiesComponent } from '../fieldset-properties/fieldset-properties.component';

@Component({
  selector: 'assaf-documentation-fieldset-install',
  templateUrl: './fieldset-install.component.html',
  styleUrls: ['./fieldset-install.component.scss'],
  standalone: true,
  imports: [SharedModule, FieldsetPropertiesComponent],
})
export class FieldsetInstallComponent {
  get install() {
    return fieldsetInstall;
  }
}
