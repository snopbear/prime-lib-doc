import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { installDropdown } from '../data';
import { DropdownPropertiesComponent } from '../dropdown-properties/dropdown-properties.component';

@Component({
  standalone:true,
  selector: 'assaf-documentation-dropdown-install',
  templateUrl: './dropdown-install.component.html',
  styleUrls: ['./dropdown-install.component.scss'],
  imports:[SharedModule,DropdownPropertiesComponent]
})
export class DropdownInstallComponent {
  get install() {
    return installDropdown;
  }
}
