import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { gettingStartedSteps } from '../data';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.css'],
  standalone: true,
  imports: [SharedModule],
})
export class I18nComponent implements OnInit {
  get steps() {
    return gettingStartedSteps;
  }
  constructor() {}

  ngOnInit() {}
}
