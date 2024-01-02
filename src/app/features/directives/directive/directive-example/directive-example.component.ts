import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { exampleDirective } from '../data/examples';

@Component({
  selector: 'assaf-documentation-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.scss'],
})
export class DirectiveExampleComponent {
  form: FormGroup = this.__fb.group({
    arabicOnly: [],
    englishOnly: [],
    englishWithoutSpace: [],
    blockCopy: [],
    blockCut: [],
    blockPaste: [],
    numberOnly: [],
    numberOnlyWithSpecialCharacters: [],
  });
  get examples() {
    return exampleDirective;
  }
  constructor(private __fb: FormBuilder) {}
}
