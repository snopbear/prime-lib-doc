import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
  OnInit,
} from '@angular/core';
import { ButtonProperties } from '@models/interfaces';
import { SharedModule } from '@shared-module/shared.module';

@Component({
  selector: 'assaf-documentation-example-loop',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './example-loop.component.html',
  styleUrls: ['./example-loop.component.scss'],
})
export class ExampleLoopComponent implements OnInit {
  @Input() data: ButtonProperties[] = [];
  @ContentChild(TemplateRef) template!: TemplateRef<any>;
  activeMode!: string;

  ngOnInit(): void {
    this.activeMode = this.data[0].htmlCode!;
  }

  displaySeverity(htmlCode: string) {
    this.activeMode = htmlCode;
  }
}
