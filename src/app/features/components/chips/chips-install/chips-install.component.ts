import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { ChipPropertiesComponent } from '../chip-properties/chip-properties.component';
import { ChipInstall } from '../data';

@Component({
  standalone:true,
  imports:[SharedModule,ChipPropertiesComponent],
  selector: 'assaf-documentation-chips-install',
  templateUrl: './chips-install.component.html',
  styleUrls: ['./chips-install.component.scss']
})
export class ChipsInstallComponent {
  get install() {
    return ChipInstall ;
  }
}
