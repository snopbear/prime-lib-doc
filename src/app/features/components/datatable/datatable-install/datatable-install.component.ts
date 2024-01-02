import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { tableInstall } from '../data';
import { DatatablePropertiesComponent } from '../datatable-properties/datatable-properties.component';

@Component({
  selector: 'assaf-documentation-datatable-install',
  standalone: true,
  imports: [SharedModule, DatatablePropertiesComponent],
  templateUrl: './datatable-install.component.html',
  styleUrls: ['./datatable-install.component.scss'],
})
export class DatatableInstallComponent {
  get install() {
    return tableInstall;
  }
}
