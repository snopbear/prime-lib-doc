import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { HttpCallsInitialization } from '../data';
import { HttpCallsTableComponent } from '../http-calls-table/http-calls-table.component';

@Component({
  standalone:true,
  imports:[SharedModule,HttpCallsTableComponent],
  selector: 'assaf-documentation-http-calls',
  templateUrl: './http-calls.component.html',
  styleUrls: ['./http-calls.component.scss']
})
export class HttpCallsComponent {
  get initialize(){
    return HttpCallsInitialization
  }
}
