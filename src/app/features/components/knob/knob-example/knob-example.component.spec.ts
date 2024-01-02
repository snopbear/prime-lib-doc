/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KnobExampleComponent } from './knob-example.component';

describe('KnobExampleComponent', () => {
  let component: KnobExampleComponent;
  let fixture: ComponentFixture<KnobExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnobExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnobExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
