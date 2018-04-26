import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasolineNewComponent } from './gasoline-new.component';

describe('GasolineNewComponent', () => {
  let component: GasolineNewComponent;
  let fixture: ComponentFixture<GasolineNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasolineNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasolineNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
