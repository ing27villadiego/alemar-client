import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaufferusNewComponent } from './chaufferus-new.component';

describe('ChaufferusNewComponent', () => {
  let component: ChaufferusNewComponent;
  let fixture: ComponentFixture<ChaufferusNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaufferusNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaufferusNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
