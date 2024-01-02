import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCallsTableComponent } from './http-calls-table.component';

describe('HttpCallsTableComponent', () => {
  let component: HttpCallsTableComponent;
  let fixture: ComponentFixture<HttpCallsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpCallsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpCallsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
