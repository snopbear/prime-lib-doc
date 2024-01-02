import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'configure-prettier',
    loadComponent: () =>
      import('./configure-prettier/configure-prettier.component').then(
        (component) => component.ConfigurePrettierComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule {}
