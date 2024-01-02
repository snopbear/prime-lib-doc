import { Component } from '@angular/core';
import { AssafButtonModule } from 'assaf-prime-lib/@components/@button';
import { AssafCarouselModule } from 'assaf-prime-lib/@components/@carousel';
import { SharedModule } from '@shared-module/shared.module';
import {
  carouselData,
  carouselImages,
  carouselResponsive,
  ImageData,
  responsiveBreakpoint,
} from '../data/index';

@Component({
  selector: 'assaf-documentation-carousel-example',
  templateUrl: './carousel-example.component.html',
  styleUrls: ['./carousel-example.component.scss'],
  standalone: true,
  imports: [AssafButtonModule, SharedModule, AssafCarouselModule],
})
export class CarouselExampleComponent {
  get carouselData(): any {
    return carouselData;
  }

  get images(): Array<ImageData> {
    return carouselImages;
  }

  get responsiveOptions(): Array<responsiveBreakpoint> {
    return carouselResponsive;
  }
}
