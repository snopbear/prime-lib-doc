import { Component , OnInit } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { emarsysStep } from '../data/emarsys';
import { EmarsysCommand, EmarsysService } from 'assaf-prime-lib/services';
import { EmarsysTableComponent } from '../emarsys-table/emarsys-table.component';

EmarsysService
@Component({
  selector: 'assaf-documentation-emarsys',
  templateUrl: './emarsys.component.html',
  styleUrls: ['./emarsys.component.scss'],
  standalone: true,
  imports: [SharedModule , EmarsysTableComponent],
})
export class EmarsysComponent implements OnInit {
  cartEvent:EmarsysCommand =['cart' , [{item:'bike' , quantity:3 , price:19.2}]] ;
  availabilityZoneEvent:EmarsysCommand = ['availabilityZone' , 'Available'];
  categoryEvent:EmarsysCommand = ['category' , 'Phone'];
  displayCurrencyEvent:EmarsysCommand = ['displayCurrency','$'];
  languageEvent:EmarsysCommand = ['language', 'ar'];
  purchaseEvent:EmarsysCommand = ['purchase',{
    orderId:'1',
    items:[{
      item:'nokia',quantity:1,price:200
    },
    {
      item:'iPhone',quantity:2,price:1200
    }]
  }]
  searchTerm:EmarsysCommand = ['searchTerm', 'healthy food'];
  setCustomerIdEvent:EmarsysCommand = ['setCustomerId', '102'];
  setEmailEvent:EmarsysCommand = ['setEmail', 'example@gmail.com'];
  testModeEvent:EmarsysCommand = ['testMode'];
  viewEvent:EmarsysCommand = ['view','300'];
  includeEvent:EmarsysCommand = ['include','healthy food','has','supplements'];
  excludeEvent:EmarsysCommand = ['exclude','iPhone','in','mobiles'];


  constructor(private __emarsys:EmarsysService) {}
  
  ngOnInit() {
  }
  get steps() {
    return emarsysStep;
  }

}
