import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'access-layer', pathMatch: 'full' },
    // access layer route
    {
      path: 'access-layer',
      loadComponent: () =>
        import('./access-layer/access-layer/access-layer.component').then(
          (component) => component.AccessLayerComponent
        ),
    },
    // Http Calls Route
    {
      path: 'httpCalls',
      loadComponent: () =>
        import('./httpCalls/http-calls/http-calls.component').then(
          (component) => component.HttpCallsComponent
        ),
    },
  // dynamic dialog route
  {
    path:'dialog-services',
    loadComponent:() =>
    import('./dialog-services/dynamic-dialog/dynamic-dialog.component').then(
      (component) => component.DynamicDialogComponent
    ),
  },
  // pipes route
  {
    path:'pipes',
    loadComponent:() =>
    import('./pipes/pipes/pipes.component').then(
      (component) => component.PipesComponent
    ),
  },
  // dynamic dialog route
  {
    path: 'display',
    loadComponent:() =>
    import('./display/display/display.component').then(
      (component) => component.DisplayComponent
    ),
  },
  // local storage route
  {
    path: 'local-storage',
    loadComponent:() =>
    import('./local-storage/local-storage/local-storage.component').then(
      (component) => component.LocalStorageComponent
    ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
