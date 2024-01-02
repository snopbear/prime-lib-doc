import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { TabviewInstall } from '../data';
import { TabViewTableComponent } from '../tab-view-table/tab-view-table.component';

@Component({
  selector: 'assaf-documentation-tab-view-install',
  standalone: true,
  imports: [SharedModule,TabViewTableComponent],
  templateUrl: './tab-view-install.component.html',
  styleUrls: ['./tab-view-install.component.scss'],
})
export class TabViewInstallComponent {
  get install(){
    return TabviewInstall;
  }
}
