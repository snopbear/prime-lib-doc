//Modules
import { NgModule } from '@angular/core';
import { UserShellRoutingModule } from './user-shell-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import { SharedModule } from '@shared-module/shared.module';
//Components
import {
  UserShellComponent,
  GetStartedComponent,
  NavContentComponent,
  HeaderComponent,
  OurTeamComponent,
} from './components//index';

@NgModule({
  declarations: [
    UserShellComponent,
    GetStartedComponent,
    OurTeamComponent,
    NavContentComponent,
    HeaderComponent,
  ],
  imports: [
    UserShellRoutingModule,
    AccordionModule,
    SidebarModule,
    SharedModule,
  ],
})
export class UserShellModule {}
