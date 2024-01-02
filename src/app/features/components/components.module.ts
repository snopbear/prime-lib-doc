//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
  ],
  imports: [CommonModule,HttpClientModule,ComponentsRoutingModule],
})
export class ComponentsModule {}
 