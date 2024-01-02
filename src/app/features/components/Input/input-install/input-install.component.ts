import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { inputIntall } from '../data';
import { InputTableComponent } from '../input-table/input-table.component';

@Component({
  standalone: true,
  selector: 'assaf-documentation-input-install',
  templateUrl: './input-install.component.html',
  styleUrls: ['./input-install.component.scss'],
  imports: [SharedModule,InputTableComponent],
})
export class InputInstallComponent {
  get install() {
    return inputIntall;
  }
}
