/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InjectScriptTagComponent } from './inject-script-tag.component';

describe('InjectScriptTagComponent', () => {
  let component: InjectScriptTagComponent;
  let fixture: ComponentFixture<InjectScriptTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectScriptTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectScriptTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
