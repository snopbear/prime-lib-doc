import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { pipesInstall } from '../data';
import { PipesMethodsComponent } from '../pipes-methods/pipes-methods.component';

@Component({
  selector: 'assaf-documentation-pipes',
  standalone: true,
  imports: [SharedModule, PipesMethodsComponent],
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  ngOnInit() {}

  get install() {
    return pipesInstall;
  }
}
