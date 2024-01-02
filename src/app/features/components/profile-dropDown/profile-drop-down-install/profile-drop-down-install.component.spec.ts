import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDropDownInstallComponent } from './profile-drop-down-install.component';

describe('ProfileDropDownInstallComponent', () => {
  let component: ProfileDropDownInstallComponent;
  let fixture: ComponentFixture<ProfileDropDownInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProfileDropDownInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDropDownInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
