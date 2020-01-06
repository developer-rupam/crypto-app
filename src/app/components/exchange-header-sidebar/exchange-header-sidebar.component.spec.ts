import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeHeaderSidebarComponent } from './exchange-header-sidebar.component';

describe('ExchangeHeaderSidebarComponent', () => {
  let component: ExchangeHeaderSidebarComponent;
  let fixture: ComponentFixture<ExchangeHeaderSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeHeaderSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeHeaderSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
