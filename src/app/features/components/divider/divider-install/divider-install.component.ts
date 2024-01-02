import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { dividerInstall } from '../data';
import { DividerPropertiesComponent } from '../divider-properties/divider-properties.component';

@Component({
  selector: 'assaf-documentation-divider-install',
  templateUrl: './divider-install.component.html',
  styleUrls: ['./divider-install.component.scss'],
  standalone:true,
  imports:[SharedModule , DividerPropertiesComponent]
})
export class DividerInstallComponent {
  get install(){
    return dividerInstall;
  }
}
