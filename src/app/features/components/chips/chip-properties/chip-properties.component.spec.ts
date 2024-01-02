import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipPropertiesComponent } from './chip-properties.component';

describe('ChipPropertiesComponent', () => {
  let component: ChipPropertiesComponent;
  let fixture: ComponentFixture<ChipPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
