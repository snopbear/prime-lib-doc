import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@core/@guards';

const routes: Routes = [
  // Logged In user route
  {
    path: '',
    loadChildren: () =>
      import('./features/user-shell/user-shell.module').then(
        (module) => module.UserShellModule
      ),
    // AuthGuard : used to enforce to auth route
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth.module').then((module) => module.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
