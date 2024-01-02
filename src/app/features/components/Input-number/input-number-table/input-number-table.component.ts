import { Component, HostListener } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import {
  createAPIGeneralTable,
  createAPIPropertiesTable,
} from '@factories/index';
import { BehaviorSubject } from 'rxjs';
import { InputNumberInterfaces, InputNumberProperties } from '../data';
import { SharedModule } from '@shared-module/shared.module';
import { InputNumberInstallComponent } from '../input-number-install/input-number-install.component';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-input-number-table',
  templateUrl: './input-number-table.component.html',
  styleUrls: ['./input-number-table.component.scss'],
})
export class InputNumberTableComponent {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }

  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _headers: TableColumn[] = createAPIPropertiesTable();

  interfaceHeaders: TableColumn[] = createAPIGeneralTable();
  get interfaces() {
    return InputNumberInterfaces;
  }
  get data() {
    return InputNumberProperties;
  }
  //#endregion Declarations

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
