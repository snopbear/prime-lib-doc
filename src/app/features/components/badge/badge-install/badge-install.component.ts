import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { BadgeTableComponent } from '../badge-table/badge-table.component';
import { BadgeInstall } from '../data';

@Component({
  standalone: true,
  imports: [SharedModule, BadgeTableComponent],
  selector: 'assaf-documentation-badge-install',
  templateUrl: './badge-install.component.html',
  styleUrls: ['./badge-install.component.scss'],
})
export class BadgeInstallComponent {
  get install() {
    return BadgeInstall;
  }
 
}
