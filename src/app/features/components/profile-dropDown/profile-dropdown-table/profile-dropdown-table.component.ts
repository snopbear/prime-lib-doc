import { Component, HostListener, OnInit } from '@angular/core';
import { createAPIGeneralTable, createAPIPropertiesTable } from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { BehaviorSubject } from 'rxjs';
import { interfaces, profileDropProperties } from '../data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-profile-dropdown-table',
  templateUrl: './profile-dropdown-table.component.html',
  styleUrls: ['./profile-dropdown-table.component.scss']
})
export class ProfileDropdownTableComponent implements OnInit {

    //#region Declerations
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this._isMobile.next(event.target?.innerWidth);
    }
  
    _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
   
    get _properties() {
      return profileDropProperties;
    }
    get _interfaces() {
      return interfaces;
    }
  
    _headers = createAPIPropertiesTable();
    _generalHeaders = createAPIGeneralTable()
  
    //#region Declerations
    //#region Life Cycle Hooks
    ngOnInit(): void {
      this._isMobile.next(window.innerWidth);
    }
    //#endregion Life Cycle Hooks
}
