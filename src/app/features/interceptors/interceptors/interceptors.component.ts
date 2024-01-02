import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { intercepterTypes } from '../data/data';

@Component({
  standalone: true,
  imports : [ SharedModule],
  selector: 'assaf-documentation-interceptors',
  templateUrl: './interceptors.component.html',
  styleUrls: ['./interceptors.component.scss']
})
export class InterceptorsComponent {
get install() {
  return intercepterTypes
}
}
