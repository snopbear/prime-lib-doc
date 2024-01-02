import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { installSlider } from '../data/install';
import { SliderTableComponent } from '../slider-table/slider-table.component';


@Component({
  selector: 'assaf-documentation-slider-install',
  standalone: true,
  imports: [SharedModule,SliderTableComponent],
  templateUrl: './slider-install.component.html',
  styleUrls: ['./slider-install.component.scss'],
})
export class SliderInstallComponent {
  get install() {
    return installSlider;
  }
  
}
