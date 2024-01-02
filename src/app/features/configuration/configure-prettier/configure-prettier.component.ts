import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { prettierStep } from '../data/config-prettier';
import { NgxLiteYoutubeModule } from 'ngx-lite-video';

@Component({
  standalone: true,
  imports: [SharedModule, NgxLiteYoutubeModule],
  selector: 'assaf-documentation-configure-prettier',
  templateUrl: './configure-prettier.component.html',
  styleUrls: ['./configure-prettier.component.scss'],
})
export class ConfigurePrettierComponent {
  get steps() {
    return prettierStep;
  }
}
