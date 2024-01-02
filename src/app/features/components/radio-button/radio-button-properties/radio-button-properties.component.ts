import { Component, HostListener, OnInit } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import { SortingTableProperties } from '@utilites/index';
import { BehaviorSubject } from 'rxjs';
import {
  createAPIGeneralTable,
  createAPIPropertiesTable,
} from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { propertiesRadioButton, interfacesRadioButton } from '../data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-radio-button-properties',
  templateUrl: './radio-button-properties.component.html',
  styleUrls: ['./radio-button-properties.component.scss'],
})
export class RadioButtonPropertiesComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }
  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _headers: TableColumn[] = createAPIPropertiesTable();
  _generalHeaders: TableColumn[] = createAPIGeneralTable();
  get _properties() {
    return SortingTableProperties(propertiesRadioButton);
  }
  get _ContrlErrorInterfaces() {
    return SortingTableProperties(
      interfacesRadioButton.interfacesControlErrors
    );
  }
  get _generalItemInterface() {
    return SortingTableProperties(interfacesRadioButton.generalItem);
  }
  //#endregion Declerations

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
