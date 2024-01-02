import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'assaf-documentation-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
})
export class LoggerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
