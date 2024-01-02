import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { CarouselPropertiesComponent } from '../carousel-properties/carousel-properties.component';
import { carouselInstall } from '../data/index';

@Component({
  selector: 'assaf-documentation-carousel-install',
  templateUrl: './carousel-install.component.html',
  styleUrls: ['./carousel-install.component.scss'],
  standalone:true,
  imports:[SharedModule,CarouselPropertiesComponent]
})
export class CarouselInstallComponent {
  get install(){
    return carouselInstall;
  }
}
