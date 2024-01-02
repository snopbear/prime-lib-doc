import { Component, HostListener, OnInit } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import { SharedModule } from '@shared-module/shared.module';
import { BehaviorSubject } from 'rxjs';
import { propertiesBadge } from '../data';
import { createAPIPropertiesTable } from '@factories/index';
import { SortingTableProperties } from '@utilites/index';
@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-badge-table',
  templateUrl: './badge-table.component.html',
  styleUrls: ['./badge-table.component.scss'],
})
export class BadgeTableComponent implements OnInit {
  _headers: TableColumn[] = createAPIPropertiesTable();
  get properties() {
    return SortingTableProperties(propertiesBadge);
  }
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }

  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  //#endregion Declerations

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
