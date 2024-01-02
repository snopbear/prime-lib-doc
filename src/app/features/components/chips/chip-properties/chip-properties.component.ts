import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import { SortingTableProperties } from '@utilites/index';
import { SharedModule } from '@shared-module/shared.module';
import {
  createAPIGeneralTable,
  createAPIPropertiesTable,
} from '@factories/index';
import { ChipProperties } from '../data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-chip-properties',
  templateUrl: './chip-properties.component.html',
  styleUrls: ['./chip-properties.component.scss'],
})
export class ChipPropertiesComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }

  _headers: TableColumn[] = createAPIPropertiesTable();
  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _generalHeaders: TableColumn[] = createAPIGeneralTable();

  get _properties() {
    return SortingTableProperties(ChipProperties);
  }

  //#endregion Declerations

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
