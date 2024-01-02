import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerInstallComponent } from './divider-install.component';

describe('DividerInstallComponent', () => {
  let component: DividerInstallComponent;
  let fixture: ComponentFixture<DividerInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividerInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
