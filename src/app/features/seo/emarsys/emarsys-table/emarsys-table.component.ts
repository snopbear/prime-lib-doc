import { Component, HostListener , OnInit } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import { createAPIGeneralTable, createAPIMethodTable } from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { SortingTableProperties } from '@utilites/index';
import { BehaviorSubject } from 'rxjs';
import { emarsysMethods } from '../data/methods';
import { emarsysInterface } from '../data/interface';
import { createEmarsysEventsProperty } from '@factories/create-table/create-api-emarsys-table';
import { emarsysEvents } from '../data/events';

@Component({
  selector: 'assaf-documentation-emarsys-table',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './emarsys-table.component.html',
  styleUrls: ['./emarsys-table.component.scss']
})
export class EmarsysTableComponent implements OnInit {

//#region Declerations
@HostListener('window:resize', ['$event'])
onResize(event: any) {
  this._isMobile.next(event.target?.innerWidth);
}

_headers: Array<TableColumn> = createAPIMethodTable();
_isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
_generalHeaders: TableColumn[] = createAPIGeneralTable();
_emarsysHeader:TableColumn[] = createEmarsysEventsProperty();
ngOnInit(): void {
  this._isMobile.next(window.innerWidth);
}
get _methods(){
  return SortingTableProperties(emarsysMethods)
}
get _cartItemInterface(){
  return SortingTableProperties(emarsysInterface.cartItem);
}
get _descriptor(){
  return SortingTableProperties(emarsysInterface.descriptor);
}
get emarsysEvents(){
  return emarsysEvents;
}
}
