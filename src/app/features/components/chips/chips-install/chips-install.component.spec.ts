import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsInstallComponent } from './chips-install.component';

describe('ChipsInstallComponent', () => {
  let component: ChipsInstallComponent;
  let fixture: ComponentFixture<ChipsInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
