import { DirectiveRouteModule } from './directive.routing.module';
import { DirectiveInstallComponent } from './directive/directive-install/directive-install.component';
import { DirectiveExampleComponent } from './directive/directive-example/directive-example.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ArabicOnlyDirective,
  BlockCopyDirective,
  BlockCutDirective,
  BlockPasteDirective,
  EnglishOnlyDirective,
  EnglishWithoutSpaceDirective,
  NumberOnlyDirective,
} from 'assaf-prime-lib/directives';

import { SharedModule } from '@shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveRouteModule,
    SharedModule,
    EnglishWithoutSpaceDirective,
    BlockCopyDirective,
    BlockCutDirective,
    BlockPasteDirective,
    ArabicOnlyDirective,
    EnglishOnlyDirective,
    NumberOnlyDirective,
  ],
  declarations: [DirectiveExampleComponent, DirectiveInstallComponent],
})
export class DirectiveModule {}
