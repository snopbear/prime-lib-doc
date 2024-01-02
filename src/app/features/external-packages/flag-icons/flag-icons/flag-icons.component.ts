import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared-module/shared.module';
import { addStyles } from '../data';

@Component({
  selector: 'assaf-documentation-flag-icons',
  standalone: true,
  imports:[SharedModule,RouterModule],
  templateUrl: './flag-icons.component.html',
  styleUrls: ['./flag-icons.component.scss']
})
export class FlagIconsComponent {
  get install(){
    return addStyles;
  }
}
