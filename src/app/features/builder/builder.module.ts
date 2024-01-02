//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';

import { BuilderRoutingModule } from './builder-routing.module';
import { AssafButtonModule } from 'assaf-prime-lib/@components/@button';
import { AssafDataTableModule } from 'assaf-prime-lib/@components/@datatable';
import { AssafInputModule } from 'assaf-prime-lib/@components/@input';
import { AssafDividerModule } from 'assaf-prime-lib/@components/@divider';
import { AssafCalendarModule } from 'assaf-prime-lib/@components/@calendar';
//Components

@NgModule({
  declarations: [

  ],
  providers: [],
  imports: [
    CommonModule,
    FormsModule,
    BuilderRoutingModule,
    TabViewModule,
    AssafButtonModule,
    AssafDataTableModule,
    AssafInputModule,
    AssafDividerModule,
    AssafCalendarModule,
  ],
})
export class BuilderModule {}
