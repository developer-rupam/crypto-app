import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTickerComponent } from './live-ticker.component';

describe('LiveTickerComponent', () => {
  let component: LiveTickerComponent;
  let fixture: ComponentFixture<LiveTickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
