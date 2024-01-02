import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { usingMetaTagService } from '../data/meta-tag';

@Component({
  selector: 'app-meta-tags',
  templateUrl: './meta-tags.component.html',
  styleUrls: ['./meta-tags.component.css'],
  standalone: true,
  imports: [SharedModule],
})
export class MetaTagsComponent implements OnInit {
  constructor() {}
  get steps() {
    return usingMetaTagService;
  }
  ngOnInit() {}
}
