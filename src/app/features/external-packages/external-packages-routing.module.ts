import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'flag-icons',
    loadComponent: () =>
      import('./flag-icons/flag-icons/flag-icons.component').then(
        (component) => component.FlagIconsComponent
      ),
  },
  {
    path: 'html2cnavas',
    loadComponent: () =>
      import('./html2canvas/html2canvas.component').then(
        (component) => component.Html2canvasComponent
      ),
  },
  {
    path: 'i18n',
    loadComponent: () =>
      import('./i18n-translate/i18n/i18n.component').then(
        (component) => component.I18nComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternalPackagesRoutingModule {}
