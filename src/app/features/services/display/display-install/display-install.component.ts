import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { displayInstall } from '../data/install';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-display-install',
  templateUrl: './display-install.component.html',
  styleUrls: ['./display-install.component.scss'],
})
export class DisplayInstallComponent {
  get install() {
    return displayInstall;
  }
}
