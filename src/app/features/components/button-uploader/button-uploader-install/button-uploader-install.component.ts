import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { BehaviorSubject } from 'rxjs';
import { eventsButton, propertiesButton, uploadButtonInstall } from '../data';
import {
  createAPIPropertiesTable,
  createAPIGeneralTable,
} from '@factories/index';
import { ButtonUpladerPropertiesComponent } from '../button-uplader-properties/button-uplader-properties.component';
import { SortingTableProperties } from '@utilites/index';

@Component({
  standalone: true,
  selector: 'assaf-documentation-button-uploader-install',
  templateUrl: './button-uploader-install.component.html',
  styleUrls: ['./button-uploader-install.component.scss'],
  imports: [SharedModule, ButtonUpladerPropertiesComponent],
})
export class ButtonUploaderInstallComponent implements OnInit {
  //#region Declerations
  _isMobile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  get install() {
    return uploadButtonInstall;
  }
  get properties() {
    return SortingTableProperties(propertiesButton);
  }
  get events() {
    return SortingTableProperties(eventsButton);
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
