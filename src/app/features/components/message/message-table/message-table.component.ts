import { Component, HostListener, OnInit } from '@angular/core';
import { createAPIPropertiesTable } from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { SortingTableProperties } from '@utilites/index';
import { BehaviorSubject } from 'rxjs';
import { messageProperties } from '../data';

@Component({
  standalone:true,
  imports: [SharedModule],
  selector: 'assaf-documentation-message-table',
  templateUrl: './message-table.component.html',
  styleUrls: ['./message-table.component.scss']
})
export class MessageTableComponent implements OnInit {
  
    //#region Declerations
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this._isMobile.next(event.target?.innerWidth);
    }
  
    _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
   
    get _properties() {
      return SortingTableProperties(messageProperties);
    }
  
    _headers = createAPIPropertiesTable();
    //#region Declerations
    //#region Life Cycle Hooks
    ngOnInit(): void {
      this._isMobile.next(window.innerWidth);
    }
    //#endregion Life Cycle Hooks
}
