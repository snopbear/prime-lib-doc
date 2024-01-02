import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownInstallComponent } from './dropdown-install.component';

describe('DropdownInstallComponent', () => {
  let component: DropdownInstallComponent;
  let fixture: ComponentFixture<DropdownInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
