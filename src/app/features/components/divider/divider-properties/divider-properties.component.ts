import { Component, HostListener, OnInit } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import { createAPIPropertiesTable } from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { BehaviorSubject } from 'rxjs';
import { dividerProperties } from '../data';

@Component({
  selector: 'assaf-documentation-divider-properties',
  templateUrl: './divider-properties.component.html',
  styleUrls: ['./divider-properties.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class DividerPropertiesComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }

  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _headers: Array<TableColumn> = createAPIPropertiesTable();
  get _properties() {
    return dividerProperties;
  }
  //#endregion Declarations
  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
