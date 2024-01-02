import { Component, HostListener, OnInit } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import { TabViewModule } from 'primeng/tabview';
import { BehaviorSubject } from 'rxjs';
import {
  createAPIPropertiesTable,
  createAPIGeneralTable,
} from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import {
  datatableProperties,
  datatableEvents,
  datatableInterfaces,
  searchInputProperties,
} from '../data';
import { SortingTableProperties } from '@utilites/index';

@Component({
  selector: 'assaf-documentation-datatable-properties',
  standalone: true,
  imports: [TabViewModule, SharedModule],
  templateUrl: './datatable-properties.component.html',
  styleUrls: ['./datatable-properties.component.scss'],
})
export class DatatablePropertiesComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }

  _headers: TableColumn[] = createAPIPropertiesTable();
  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _generalHeaders: TableColumn[] = createAPIGeneralTable();

  get _properties() {
    return SortingTableProperties(datatableProperties);
  }
  get _searchProperties() {
    return searchInputProperties;
  }
  get _events() {
    return SortingTableProperties(datatableEvents);
  }
  get _interfaces() {
    return datatableInterfaces;
  }
  //#endregion Declerations

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
