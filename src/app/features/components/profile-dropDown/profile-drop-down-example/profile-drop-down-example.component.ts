import { Component } from '@angular/core';
import { SharedModule } from '@shared-module/shared.module';
import { FormBuilder } from '@angular/forms';
import { AssafProfileDropdownModule } from 'assaf-prime-lib/@components/@profile-dropdown';
import { ProfileDropDownExamples } from '../data/examples';

@Component({
  selector: 'assaf-documentation-profile-drop-down-example',
  standalone: true,
  imports: [SharedModule, AssafProfileDropdownModule],
  templateUrl: './profile-drop-down-example.component.html',
  styleUrls: ['./profile-drop-down-example.component.scss'],
})
export class ProfileDropDownExampleComponent {
  get ProfileDropDownExamples() {
    return ProfileDropDownExamples;
  }

  data = [
    { label: '1tex', icon: 'pi pi-bolt' },
    { label: '2text', icon: 'pi pi-bolt' },
    { label: '3text', icon: 'pi pi-bolt' },
    { label: '4text', icon: 'pi pi-bolt' },
    { label: '5text', icon: 'fa-mail-reply' },
  ];
  menu = [
    {
      label: 'Text',
      items: [
        { label: '2text', icon: 'pi pi-bolt' },
        { label: '3text', icon: 'pi pi-bolt' },
      ],
    },
    {
      label: 'Text2',
      items: [
        { label: '4text', icon: 'pi pi-bolt' },
        { label: '5text', icon: 'pi pi-question' },
      ],
    },
  ];
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {}
}
