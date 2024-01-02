import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  selector: 'assaf-documentation-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class LinkComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
