import { Component, HostListener, OnInit } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import {
  createAPIGeneralTable,
  createAPIPropertiesTable,
} from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { SortingTableProperties } from '@utilites/index';
import { BehaviorSubject } from 'rxjs';
import { interfacesTabView, propertiesTabView } from '../data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-tab-view-table',
  templateUrl: './tab-view-table.component.html',
  styleUrls: ['./tab-view-table.component.scss'],
})
export class TabViewTableComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }
  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _headers: TableColumn[] = createAPIPropertiesTable();
  _generalHeaders: TableColumn[] = createAPIGeneralTable();
  get _properties() {
    return SortingTableProperties(propertiesTabView);
  }
  get _interfaces() {
    return SortingTableProperties(interfacesTabView.tableColumn);
  }
  //#endregion Declerations

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
