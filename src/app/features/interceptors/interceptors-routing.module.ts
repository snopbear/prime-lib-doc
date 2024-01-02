import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'interceptorsTypes', pathMatch: 'full' },
  // Button route
  {
    path: 'interceptorsTypes',
    loadComponent: () =>
      import('./interceptors/interceptors.component').then(
        (component) => component.InterceptorsComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterceptorsRoutingModule {}
