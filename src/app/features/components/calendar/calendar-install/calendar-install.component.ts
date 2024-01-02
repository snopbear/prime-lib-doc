import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { CalendarPropertiesComponent } from '../calendar-properties/calendar-properties.component';
import { CalendarInstall } from '../data/index';

@Component({
  standalone:true,
  imports:[SharedModule, CalendarPropertiesComponent],
  selector: 'assaf-documentation-calendar-install',
  templateUrl: './calendar-install.component.html',
  styleUrls: ['./calendar-install.component.scss']
})
export class CalendarInstallComponent {
get install(){
  return CalendarInstall;
}
}
