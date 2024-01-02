import { Component, HostListener, OnInit } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import {
  createAPIGeneralTable,
  createAPIPropertiesTable,
} from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { SortingTableProperties } from '@utilites/index';
import { BehaviorSubject } from 'rxjs';
import { eventKnob, propertiesKnob } from '../data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-knob-table',
  templateUrl: './knob-table.component.html',
  styleUrls: ['./knob-table.component.scss'],
})
export class KnobTableComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }

  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  get properties() {
    return SortingTableProperties(propertiesKnob);
  }
  get _events() {
    return SortingTableProperties(eventKnob);
  }
  _headers: TableColumn[] = createAPIPropertiesTable();
  _generalHeaders: TableColumn[] = createAPIGeneralTable();
  //#region Declerations
  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
