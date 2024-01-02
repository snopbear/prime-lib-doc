import { Component, HostListener } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import {
  createAPIGeneralTable,
  createAPIPropertiesTable,
} from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { SortingTableProperties } from '@utilites/sortingTableProperty/sortingTableProperty';
import { BehaviorSubject } from 'rxjs';
import { fieldsetInterfaces, fieldsetProperties } from '../data';

@Component({
  selector: 'assaf-documentation-fieldset-properties',
  templateUrl: './fieldset-properties.component.html',
  styleUrls: ['./fieldset-properties.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class FieldsetPropertiesComponent {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }
  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _headers: Array<TableColumn> = createAPIPropertiesTable();
  _generalHeaders: Array<TableColumn> = createAPIGeneralTable();
  get _properties() {
    return SortingTableProperties(fieldsetProperties);
  }
  get _interfaces() {
    return SortingTableProperties(fieldsetInterfaces);
  }
  //#endregion Declarations
  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
