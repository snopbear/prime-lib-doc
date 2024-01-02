import { Component, HostListener, OnInit } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import {
  createAPIGeneralTable,
  createAPIPropertiesTable,
} from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { BehaviorSubject } from 'rxjs';
import { interfaces, properties } from '../data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-input-table',
  templateUrl: './input-table.component.html',
  styleUrls: ['./input-table.component.scss'],
})
export class InputTableComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }

  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _headers: TableColumn[] = createAPIPropertiesTable();

  interfaceHeaders: TableColumn[] = createAPIGeneralTable();
  get interfaces() {
    return interfaces;
  }
  get data() {
    return properties;
  }
  //#endregion Declarations

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
