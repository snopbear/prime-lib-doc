import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { toastInstall } from '../data';
import { ToasterTableComponent } from '../toaster-table/toaster-table.component';

@Component({
  standalone: true,
  imports: [SharedModule,ToasterTableComponent],
  selector: 'assaf-documentation-toaster-install',
  templateUrl: './toaster-install.component.html',
  styleUrls: ['./toaster-install.component.scss'],
})
export class ToasterInstallComponent {
  get _install() {
    return toastInstall;
  }

}
