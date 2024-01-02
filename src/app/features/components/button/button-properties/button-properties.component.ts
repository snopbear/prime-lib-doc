import { Component, HostListener, OnInit } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { TabViewModule } from 'primeng/tabview';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import { ButtonContent } from '../data/index';
import { BehaviorSubject } from 'rxjs';
import { events } from '../data';
import {
  createAPIPropertiesTable,
  createAPIGeneralTable,
} from '@factories/index';
import { SortingTableProperties } from '@utilites/index';

@Component({
  selector: 'assaf-documentation-button-properties',
  standalone: true,
  imports: [SharedModule, TabViewModule],
  templateUrl: './button-properties.component.html',
  styleUrls: ['./button-properties.component.scss'],
})
export class ButtonPropertiesComponent implements OnInit {
  _headers: TableColumn[] = createAPIPropertiesTable();
  get _data() {
    return SortingTableProperties(ButtonContent);
  }
  get _events() {
    return SortingTableProperties(events);
  }
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }

  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _generalHeaders: TableColumn[] = createAPIGeneralTable();

  //#endregion Declerations

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
