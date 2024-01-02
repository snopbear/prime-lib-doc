import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { buttonInstall } from '../data';
import { ButtonPropertiesComponent } from '../button-properties/button-properties.component';
import { AssafDataTableModule } from 'assaf-prime-lib/@components/@datatable';

@Component({
  standalone: true,
  selector: 'assaf-documentation-button-install',
  templateUrl: './button-install.component.html',
  styleUrls: ['./button-install.component.scss'],
  imports: [AssafDataTableModule, SharedModule, ButtonPropertiesComponent],
})
export class ButtonInstallComponent {
  get install() {
    return buttonInstall;
  }
}
