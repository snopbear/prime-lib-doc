import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { KnobInstall } from '../data';
import { KnobTableComponent } from '../knob-table/knob-table.component';

@Component({
  standalone: true,
  imports: [SharedModule,KnobTableComponent],
  selector: 'assaf-documentation-knob-install',
  templateUrl: './knob-install.component.html',
  styleUrls: ['./knob-install.component.scss'],
})
export class KnobInstallComponent {
  get install() {
    return KnobInstall;
  }
 
}
