//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';
import { AssafButtonModule } from 'assaf-prime-lib/@components/@button';
import { AssafDataTableModule } from 'assaf-prime-lib/@components/@datatable';
import { AssafDividerModule } from 'assaf-prime-lib/@components/@divider';
import { AssafInputModule } from 'assaf-prime-lib/@components/@input';
import { AssafTabviewModule } from 'assaf-prime-lib/@components/@tabview';

//Components

//Pipes
import { SafehtmlPipe } from '@pipes/index';
import { CodeBlockComponent, ExampleContainerComponent } from './components';

@NgModule({
  declarations: [SafehtmlPipe, CodeBlockComponent, ExampleContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedRoutingModule,
    TooltipModule,
    TabViewModule,
    AccordionModule,
    AssafButtonModule,
    AssafDataTableModule,
    AssafDividerModule,
    AssafInputModule,
    AssafTabviewModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TooltipModule,
    TabViewModule,
    AccordionModule,
    AssafButtonModule,
    AssafDataTableModule,
    AssafDividerModule,
    AssafInputModule,
    AssafTabviewModule,
    SafehtmlPipe,
    ExampleContainerComponent,
    CodeBlockComponent,
  ],
})
export class SharedModule {}
