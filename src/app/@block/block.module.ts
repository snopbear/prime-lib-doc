//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockRoutingModule } from './block-routing.module';
import { AssafToastModule } from 'assaf-prime-lib/@components/@toast';

//Components
import { AppComponent } from '.';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BlockRoutingModule, AssafToastModule],
})
export class BlockModule {}
