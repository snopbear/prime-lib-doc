import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterTableComponent } from './toaster-table.component';

describe('ToasterTableComponent', () => {
  let component: ToasterTableComponent;
  let fixture: ComponentFixture<ToasterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToasterTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToasterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
