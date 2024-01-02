import { Component, HostListener } from '@angular/core';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import {
  createAPIGeneralTable,
  createAPIPropertiesTable,
} from '@factories/index';
import { SharedModule } from '@shared-module/shared.module';
import { SortingTableProperties } from '@utilites/index';
import { BehaviorSubject } from 'rxjs';
import { progressBarProperties } from '../data';

@Component({
  selector: 'assaf-documentation-progress-bar-properties',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './progress-bar-properties.component.html',
  styleUrls: ['./progress-bar-properties.component.scss'],
})
export class ProgressBarPropertiesComponent {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }

  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _headers: TableColumn[] = createAPIPropertiesTable();
  _generalHeaders: TableColumn[] = createAPIGeneralTable();
  get _properties() {
    return SortingTableProperties(progressBarProperties);
  }

  //#endregion Declarations
  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
}
