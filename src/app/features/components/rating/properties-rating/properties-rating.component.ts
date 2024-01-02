import { Component, HostListener, OnInit } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import { events, propertiesRating, interfacesRating } from '../data';
import {
  createAPIGeneralTable,
  createAPIPropertiesTable,
} from '@factories/index';
import { SortingTableProperties } from '@utilites/index';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'assaf-documentiation-properties-rating',
  templateUrl: './properties-rating.component.html',
  styleUrls: ['./properties-rating.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class PropertiesRatingComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }

  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  _generalHeaders: TableColumn[] = createAPIGeneralTable();
  _headers: TableColumn[] = createAPIPropertiesTable();
  get _properties() {
    return SortingTableProperties(propertiesRating);
  }
  get _events() {
    return SortingTableProperties(events);
  }
  get _interfaces() {
    return SortingTableProperties(interfacesRating.tableColumn);
  }
  //#region Declerations
  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
