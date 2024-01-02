import { propertiesPhoneNumber } from './../data/properties-phone-number';
import { Component, HostListener, OnInit } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import { createAPIPropertiesTable } from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { SortingTableProperties } from '@utilites/index';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-phone-number-table',
  templateUrl: './phone-number-table.component.html',
  styleUrls: ['./phone-number-table.component.scss'],
})
export class PhoneNumberTableComponent implements OnInit {
  _headers: TableColumn[] = createAPIPropertiesTable();
  get properties() {
    return SortingTableProperties(propertiesPhoneNumber);
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
}
