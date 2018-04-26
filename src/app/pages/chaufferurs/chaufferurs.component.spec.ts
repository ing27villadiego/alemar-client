import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaufferursComponent } from './chaufferurs.component';

describe('ChaufferursComponent', () => {
  let component: ChaufferursComponent;
  let fixture: ComponentFixture<ChaufferursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaufferursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaufferursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
