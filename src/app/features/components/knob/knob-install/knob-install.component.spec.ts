/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KnobInstallComponent } from './knob-install.component';

describe('KnobInstallComponent', () => {
  let component: KnobInstallComponent;
  let fixture: ComponentFixture<KnobInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnobInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnobInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
