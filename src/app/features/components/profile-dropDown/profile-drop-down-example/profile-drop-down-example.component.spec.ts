import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDropDownExampleComponent } from './profile-drop-down-example.component';

describe('ProfileDropDownExampleComponent', () => {
  let component: ProfileDropDownExampleComponent;
  let fixture: ComponentFixture<ProfileDropDownExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProfileDropDownExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDropDownExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
