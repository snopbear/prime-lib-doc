import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { AccesLayerTableComponent } from '../acces-layer-table/acces-layer-table.component';
import { AccessLayerInitialization } from '../data';

@Component({
  standalone: true,
  imports:[SharedModule,AccesLayerTableComponent],
  selector: 'assaf-documentation-access-layer',
  templateUrl: './access-layer.component.html',
  styleUrls: ['./access-layer.component.scss']
})
export class AccessLayerComponent {
get initialize(){
  return AccessLayerInitialization
}
}
