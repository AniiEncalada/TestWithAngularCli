import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilConfirmacionComponent } from './util-confirmacion.component';

describe('UtilConfirmacionComponent', () => {
  let component: UtilConfirmacionComponent;
  let fixture: ComponentFixture<UtilConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
