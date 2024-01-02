import { Component } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import { createAPIPropertiesTable } from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { spinnerInstall, spinnerProperties } from '../data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-spinner-install',
  templateUrl: './spinner-install.component.html',
  styleUrls: ['./spinner-install.component.scss'],
})
export class SpinnerInstallComponent {
  get install() {
    return spinnerInstall;
  }

  _headers: TableColumn[] = createAPIPropertiesTable();
  properties = spinnerProperties;
}
