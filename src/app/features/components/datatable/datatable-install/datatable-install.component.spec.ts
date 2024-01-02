import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableInstallComponent } from './datatable-install.component';

describe('DatatableInstallComponent', () => {
  let component: DatatableInstallComponent;
  let fixture: ComponentFixture<DatatableInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DatatableInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatableInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
