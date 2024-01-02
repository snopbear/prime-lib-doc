import { Component } from '@angular/core';
import { inputNumberInstall } from '../data';
import { SharedModule } from '@shared-module/shared.module';
import { InputNumberTableComponent } from '../input-number-table/input-number-table.component';

@Component({
  standalone: true,
  imports: [SharedModule, InputNumberTableComponent],
  selector: 'assaf-documentation-input-number-install',
  templateUrl: './input-number-install.component.html',
  styleUrls: ['./input-number-install.component.scss'],
})
export class InputNumberInstallComponent {
  get install() {
    return inputNumberInstall;
  }
}
