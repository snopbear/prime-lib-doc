import { DirectiveComponent } from './directive/directive/directive.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Logged In user route
  {
    path: 'directive',
    component: DirectiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectiveRouteModule {}
