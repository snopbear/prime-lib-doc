import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { usingPageTitleService } from '../data/page-title';

@Component({
  selector: 'assaf-documentation-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class PageTitleComponent implements OnInit {
  get steps() {
    return usingPageTitleService;
  }
  constructor() {}

  ngOnInit() {
    
  }
}

