import { Component, HostListener, OnInit } from '@angular/core';
import { createAPIPropertiesTable } from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { SortingTableProperties } from '@utilites/index';
import { BehaviorSubject } from 'rxjs';
import { toastProperties } from '../data';

@Component({
  standalone:true,
  imports: [SharedModule],
  selector: 'assaf-documentation-toaster-table',
  templateUrl: './toaster-table.component.html',
  styleUrls: ['./toaster-table.component.scss']
})
export class ToasterTableComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }
  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  get _properties() {
    return SortingTableProperties(toastProperties);
  }

  _headers = createAPIPropertiesTable();
     //#endregion Declerations
  
  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
