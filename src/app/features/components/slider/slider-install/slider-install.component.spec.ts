import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderInstallComponent } from './slider-install.component';

describe('SliderInstallComponent', () => {
  let component: SliderInstallComponent;
  let fixture: ComponentFixture<SliderInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SliderInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
