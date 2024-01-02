import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'meta-tags',
    loadComponent: () =>
      import('./meta-tags/component/meta-tags.component').then(
        (component) => component.MetaTagsComponent
      ),
  },
  {
    path: 'tag-manager',
    loadComponent: () =>
      import('./tag-manager/component/tag-manager/tag-manager.component').then(
        (component) => component.TagManagerComponent
      ),
  },
  {
    path: 'link',
    loadComponent: () =>
      import('./link/link.component').then(
        (component) => component.LinkComponent
      ),
  },
  {
    path: 'page-title',
    loadComponent: () =>
      import('./page-title/component/page-title.component').then(
        (component) => component.PageTitleComponent
      ),
  },
  {
    path: 'inject-script-tag',
    loadComponent: () =>
      import('./inject-script-tag/inject-script-tag.component').then(
        (component) => component.InjectScriptTagComponent
      ),
  },
  {
    path: 'emarsys',
    loadComponent: () =>
      import('./emarsys/emarsys/emarsys.component').then(
        (component) => component.EmarsysComponent
      ),
  },
  {
    path: 'hotjar',
    loadComponent: () =>
      import('./hotjar/components/hotjar/hotjar.component').then(
        (component) => component.HotjarComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeoRoutingModule {}
