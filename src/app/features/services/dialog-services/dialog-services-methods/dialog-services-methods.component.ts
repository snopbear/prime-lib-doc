import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import { dialogMethods } from '../data';
import { createAPIMethodTable } from '@factories/index';

@Component({
  selector: 'assaf-documentation-dialog-services-methods',
  templateUrl: './dialog-services-methods.component.html',
  styleUrls: ['./dialog-services-methods.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class DialogServicesMethodsComponent {
  _headers: Array<TableColumn> = createAPIMethodTable();
  get _methods() {
    return dialogMethods;
  }
}
