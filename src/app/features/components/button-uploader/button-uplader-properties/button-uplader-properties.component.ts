import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { createAPIGeneralTable, createAPIPropertiesTable } from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { eventsButton, propertiesButton } from '../data';

@Component({
  standalone:true,
  imports:[SharedModule],
  selector: 'assaf-documentation-button-uplader-properties',
  templateUrl: './button-uplader-properties.component.html',
  styleUrls: ['./button-uplader-properties.component.scss']
})
export class ButtonUpladerPropertiesComponent implements OnInit {
//#region Declerations
@HostListener('window:resize', ['$event'])
onResize(event: any) {
  this._isMobile.next(event.target?.innerWidth);
}

_isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);

get properties() {
  return propertiesButton;
}
get events() {
  return eventsButton;
}
propertiesHeaders = createAPIPropertiesTable();
eventsHeaders = createAPIGeneralTable();
 //#endregion Declerations

//#region Life Cycle Hooks
ngOnInit(): void {
  this._isMobile.next(window.innerWidth);
}
//#endregion Life Cycle Hooks
}
