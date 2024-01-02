import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { SkeletonInstall } from '../data';
import { SkeletonPropertiesComponent } from '../skeleton-properties/skeleton-properties.component';

@Component({
  standalone: true,
  imports: [SharedModule,SkeletonPropertiesComponent],
  selector: 'assaf-documentation-skeleton-install',
  templateUrl: './skeleton-install.component.html',
  styleUrls: ['./skeleton-install.component.scss']
})
export class SkeletonInstallComponent {
  get install() {
    return SkeletonInstall;
  }
}
