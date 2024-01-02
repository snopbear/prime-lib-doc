import { Component } from '@angular/core';

import { SharedModule } from '@shared-module/shared.module';
import { profileDropInstall } from '../data';
import { ProfileDropdownTableComponent } from '../profile-dropdown-table/profile-dropdown-table.component';

@Component({
  selector: 'assaf-documentation-profile-drop-down-install',
  standalone: true,
  imports: [SharedModule,ProfileDropdownTableComponent],
  templateUrl: './profile-drop-down-install.component.html',
  styleUrls: ['./profile-drop-down-install.component.scss'],
})
export class ProfileDropDownInstallComponent {
  get _install() {
    return profileDropInstall;
  }
;
}
