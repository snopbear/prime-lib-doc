import { Component, HostListener, OnInit } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import { SortingTableProperties } from '@utilites/index';
import { BehaviorSubject } from 'rxjs';
import { SharedModule } from '@shared-module/shared.module';
import {
  createAPIGeneralTable,
  createAPIPropertiesTable,
} from '@factories/index';
import { DropdownInterfaces, DropdownProperties } from '../data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-dropdown-properties',
  templateUrl: './dropdown-properties.component.html',
  styleUrls: ['./dropdown-properties.component.scss'],
})
export class DropdownPropertiesComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }
  _headers: TableColumn[] = createAPIPropertiesTable();
  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _generalHeaders: TableColumn[] = createAPIGeneralTable();
  get _properties() {
    return SortingTableProperties(DropdownProperties);
  }
  get _interfaces() {
    return SortingTableProperties(DropdownInterfaces.interface);
  }
  get _ErrorInterfaces() {
    return SortingTableProperties(DropdownInterfaces.interfacesControlErrors);
  }
  //#endregion Declerations

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
