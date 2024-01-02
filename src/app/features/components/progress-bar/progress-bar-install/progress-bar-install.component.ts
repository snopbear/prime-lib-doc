import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { progressBarInstall } from '../data';
import { AssafProgressBarModule } from 'assaf-prime-lib/@components/@progress-bar';
import { ProgressBarPropertiesComponent } from '../progress-bar-properties/progress-bar-properties.component';

@Component({
  selector: 'assaf-documentation-progress-bar-install',
  standalone: true,
  imports: [SharedModule, ProgressBarPropertiesComponent, AssafProgressBarModule],
  templateUrl: './progress-bar-install.component.html',
  styleUrls: ['./progress-bar-install.component.scss'],
})
export class ProgressBarInstallComponent {
  get install() {
    return progressBarInstall;
  }
}
