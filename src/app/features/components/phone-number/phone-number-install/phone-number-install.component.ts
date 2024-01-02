import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { phoneNumberInstall } from '../data/install';
import { PhoneNumberTableComponent } from '../phone-number-table/phone-number-table.component';

@Component({
  selector: 'assaf-documentation-phone-number-install',
  standalone: true,
  imports: [SharedModule, PhoneNumberTableComponent],
  templateUrl: './phone-number-install.component.html',
  styleUrls: ['./phone-number-install.component.scss'],
})
export class PhoneNumberInstallComponent {
  get install() {
    return phoneNumberInstall;
  }
  get htmlUse() {
    return;
  }
}
