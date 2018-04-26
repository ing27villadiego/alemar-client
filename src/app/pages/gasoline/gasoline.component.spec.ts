import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasolineComponent } from './gasoline.component';

describe('GasolineComponent', () => {
  let component: GasolineComponent;
  let fixture: ComponentFixture<GasolineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasolineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasolineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
