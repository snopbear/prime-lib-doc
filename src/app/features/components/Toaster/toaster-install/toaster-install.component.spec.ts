import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterInstallComponent } from './toaster-install.component';

describe('ToasterInstallComponent', () => {
  let component: ToasterInstallComponent;
  let fixture: ComponentFixture<ToasterInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToasterInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToasterInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
