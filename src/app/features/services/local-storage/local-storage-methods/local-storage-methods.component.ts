import { Component } from '@angular/core';
import { createAPIMethodTable } from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { localStorageMethods } from '../data';
import { LocalStorageService } from 'assaf-prime-lib/services';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';

@Component({
  selector: 'assaf-documentation-local-storage-methods',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './local-storage-methods.component.html',
  styleUrls: ['./local-storage-methods.component.scss'],
})
export class LocalStorageMethodsComponent {
  constructor(private __localStorage: LocalStorageService) {}
  _headers: Array<TableColumn> = createAPIMethodTable();
  get _methods() {
    return localStorageMethods;
  }
}
