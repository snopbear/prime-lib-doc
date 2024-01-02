import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import {
  createAPIGeneralTable,
  createAPIPropertiesTable,
} from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { SortingTableProperties } from '@utilites/index';
import { CalendarInterfaces, CalendarProperties } from '../data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-calendar-properties',
  templateUrl: './calendar-properties.component.html',
  styleUrls: ['./calendar-properties.component.scss'],
})
export class CalendarPropertiesComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }
  _headers: TableColumn[] = createAPIPropertiesTable();
  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _generalHeaders: TableColumn[] = createAPIGeneralTable();
  get _properties() {
    return SortingTableProperties(CalendarProperties);
  }
  get _interfaces() {
    return SortingTableProperties(CalendarInterfaces);
  }

  //#endregion Declerations

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
