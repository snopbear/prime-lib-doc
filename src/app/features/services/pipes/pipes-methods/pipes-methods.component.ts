import { Component } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import { createAPIMethodTable } from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { pipesMethods } from '../data';

@Component({
  selector: 'assaf-documentation-pipes-methods',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './pipes-methods.component.html',
  styleUrls: ['./pipes-methods.component.scss'],
})
export class PipesMethodsComponent {
  _headers: Array<TableColumn> = createAPIMethodTable();
  get _methods() {
    return pipesMethods;
  }
}
