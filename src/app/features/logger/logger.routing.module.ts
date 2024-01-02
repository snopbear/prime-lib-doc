import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'logger',
    loadComponent: () =>
      import('./logger/logger.component').then(
        (component) => component.LoggerComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggerRoutingModule {}
