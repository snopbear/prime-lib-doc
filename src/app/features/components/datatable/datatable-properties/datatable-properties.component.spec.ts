import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablePropertiesComponent } from './datatable-properties.component';

describe('DatatablePropertiesComponent', () => {
  let component: DatatablePropertiesComponent;
  let fixture: ComponentFixture<DatatablePropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DatatablePropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
