import { Component, HostListener, OnInit } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import {
  createAPIGeneralTable,
  createAPIPropertiesTable,
} from '@factories/index';
import { SortingTableProperties } from '@utilites/index';
import { BehaviorSubject } from 'rxjs';
import { SharedModule } from '@shared-module/shared.module';
import {
  eventsCheckbox,
  interfacesCheckBox,
  propertiesCheakbox,
} from '../data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-checkbox-properties',
  templateUrl: './checkbox-properties.component.html',
  styleUrls: ['./checkbox-properties.component.scss'],
})
export class CheckboxPropertiesComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }

  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _headers: TableColumn[] = createAPIPropertiesTable();
  _generalHeaders: TableColumn[] = createAPIGeneralTable();

  get _properties() {
    return SortingTableProperties(propertiesCheakbox);
  }

  get _events() {
    return SortingTableProperties(eventsCheckbox);
  }
  get _interfaces() {
    return SortingTableProperties(interfacesCheckBox.tableColumn);
  }
  get _generalItemInterface() {
    return SortingTableProperties(interfacesCheckBox.generalItem);
  }
  //#endregion Declerations

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
