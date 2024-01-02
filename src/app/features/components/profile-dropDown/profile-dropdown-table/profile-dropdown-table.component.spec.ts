import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDropdownTableComponent } from './profile-dropdown-table.component';

describe('ProfileDropdownTableComponent', () => {
  let component: ProfileDropdownTableComponent;
  let fixture: ComponentFixture<ProfileDropdownTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDropdownTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDropdownTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
