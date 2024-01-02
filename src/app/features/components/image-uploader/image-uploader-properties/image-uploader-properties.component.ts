import { Component, HostListener, OnInit } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { TableColumn } from 'assaf-prime-lib/@components/@datatable';
import {
  createAPIGeneralTable,
  createAPIPropertiesTable,
} from '@factories/index';
import {
  imageUploaderEvents,
  imageUploaderProperties,
  interfaces,
} from '../data';
import { SortingTableProperties } from '@utilites/index';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'assaf-documentation-image-uploader-properties',
  templateUrl: './image-uploader-properties.component.html',
  styleUrls: ['./image-uploader-properties.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class ImageUploaderPropertiesComponent implements OnInit {
  //#region Declerations
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
  }

  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  _headers: TableColumn[] = createAPIPropertiesTable();
  _generalHeaders: TableColumn[] = createAPIGeneralTable();
  get _properties() {
    return SortingTableProperties(imageUploaderProperties);
  }
  get _events() {
    return SortingTableProperties(imageUploaderEvents);
  }
  get _interfaces() {
    return SortingTableProperties(interfaces);
  }
  //#endregion Declarations
  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._isMobile.next(window.innerWidth);
  }
  //#endregion Life Cycle Hooks
}
