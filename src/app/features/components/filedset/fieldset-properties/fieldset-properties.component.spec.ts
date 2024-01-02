import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsetPropertiesComponent } from './fieldset-properties.component';

describe('FieldsetPropertiesComponent', () => {
  let component: FieldsetPropertiesComponent;
  let fixture: ComponentFixture<FieldsetPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FieldsetPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldsetPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
