import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { localStorageInstall } from '../data';
import { LocalStorageMethodsComponent } from '../local-storage-methods/local-storage-methods.component';


@Component({
  selector: 'assaf-documentation-local-storage',
  standalone: true,
  imports: [SharedModule, LocalStorageMethodsComponent],
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss'],
})
export class LocalStorageComponent {
  get install() {
    return localStorageInstall;
  }
}
