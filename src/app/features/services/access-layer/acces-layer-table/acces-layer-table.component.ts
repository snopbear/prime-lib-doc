import { Component, HostListener, OnInit } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import { createAPIGeneralTable, createAPIMethodTable } from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { SortingTableProperties } from '@utilites/index';
import { BehaviorSubject } from 'rxjs';
import { AccessLayerInterfaces, AccessLayerMethods } from '../data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-acces-layer-table',
  templateUrl: './acces-layer-table.component.html',
  styleUrls: ['./acces-layer-table.component.scss'],
})
export class AccesLayerTableComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }
  _headers: Array<TableColumn> = createAPIMethodTable();
  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _generalHeaders: TableColumn[] = createAPIGeneralTable();

  get _methods() {
    return SortingTableProperties(AccessLayerMethods);
  }
  get _enforceIDInterface() {
    return SortingTableProperties(AccessLayerInterfaces.EnforceID);
  }
  get _stateInterface() {
    return SortingTableProperties(AccessLayerInterfaces.State);
  }
  get _requestURLsInterface() {
    return SortingTableProperties(AccessLayerInterfaces.RequestURLs);
  }
  //#endregion Declerations

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
