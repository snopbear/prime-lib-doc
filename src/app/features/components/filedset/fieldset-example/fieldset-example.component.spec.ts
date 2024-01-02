import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsetExampleComponent } from './fieldset-example.component';

describe('FieldsetExampleComponent', () => {
  let component: FieldsetExampleComponent;
  let fixture: ComponentFixture<FieldsetExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsetExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldsetExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
