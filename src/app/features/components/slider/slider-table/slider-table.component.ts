import { Component, HostListener, OnInit } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import {
  createAPIGeneralTable,
  createAPIPropertiesTable,
} from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { BehaviorSubject } from 'rxjs';
import { events, interfacesSlider, propertiesSlider } from '../data/properties';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-slider-table',
  templateUrl: './slider-table.component.html',
  styleUrls: ['./slider-table.component.scss'],
})
export class SliderTableComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }
  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _headers: TableColumn[] = createAPIPropertiesTable();
  get _properties() {
    return propertiesSlider;
  }
  _generalHeaders: TableColumn[] = createAPIGeneralTable();
  get _events() {
    return events;
  }
  get _interfaces() {
    return interfacesSlider.tableColumn;
  }
  //#endregion Declerations

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
