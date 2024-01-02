//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import {
  GetStartedComponent,
  OurTeamComponent,
  UserShellComponent,
} from './components/index';

const routes: Routes = [
  {
    path: '',
    component: UserShellComponent,
    children: [
      // Getting started route
      {
        path: '',
        component: GetStartedComponent,
      },
      // Our Team route
      {
        path: 'our-team',
        component: OurTeamComponent,
      },
      // Components route
      {
        path: 'components',
        loadChildren: () =>
          import('../components/components.module').then(
            (module) => module.ComponentsModule
          ),
      },
      // Directives route
      {
        path: 'directives',
        loadChildren: () =>
          import('../directives/directive.module').then(
            (module) => module.DirectiveModule
          ),
      },
      // Services route
      {
        path: 'services',
        loadChildren: () =>
          import('../services/services.module').then(
            (module) => module.ServicesModule
          ),
      },
      //interceptors route
      {
        path: 'interceptors',
        loadChildren: () =>
          import('../interceptors/interceptors.module').then(
            (module) => module.InterceptorsModule
          ),
      },
      // External package route
      {
        path: 'external-packages',
        loadChildren: () =>
          import('../external-packages/external-packages.module').then(
            (module) => module.ExternalPackagesModule
          ),
      },
      // External package route
      {
        path: 'json-builder',
        loadChildren: () =>
          import('../builder/builder-routing.module').then(
            (module) => module.BuilderRoutingModule
          ),
      },
      // {
      //   path: 'builder',
      //   loadChildren: () =>
      //     import('../ng-drag-drop-builder/ng-drag-drop-builder.module').then(
      //       (module) => module.NgDragDropBuilderModule
      //     ),
      // },
      // Seo route
      {
        path: 'seo',
        loadChildren: () =>
          import('../seo/seo.module').then((module) => module.SeoModule),
      },
      // Logger route
      {
        path: 'logger',
        loadChildren: () =>
          import('../logger/logger.module').then(
            (module) => module.LoggerModule
          ),
      },
      // Tutorual route
      // {
      //   path: 'tutorial',
      //   loadChildren: () =>
      //     import('../tutorial/tutorial.module').then(
      //       (module) => module.TutorialModule
      //     ),
      // },
      // Configuration route
      {
        path: 'configuration',
        loadChildren: () =>
          import('../configuration/configuration.module').then(
            (module) => module.ConfigurationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserShellRoutingModule {}
