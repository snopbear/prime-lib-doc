import { Component, Input } from '@angular/core';

@Component({
  selector: 'assaf-documentation-example-container',
  templateUrl: './example-container.component.html',
  styleUrls: ['./example-container.component.scss'],
})
export class ExampleContainerComponent {
  @Input() title!: string;
  @Input() html!: string;
  @Input() ts!: string;
  @Input() otherText!: string;
  @Input() styleClass!: string;
}
