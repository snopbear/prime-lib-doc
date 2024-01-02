//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockModule } from './@block/block.module';
//Components
import { AppComponent } from './@block';
//Pipes
import { DatePipe, DecimalPipe } from '@angular/common';
//Services
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    BlockModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [DecimalPipe, DatePipe, MessageService, DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
