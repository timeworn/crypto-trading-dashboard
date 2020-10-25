import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF }                    from '@angular/common';

import { CoinTableComponent } from './coin-table.component';

import { imports } from 'app/app.module';

describe('CoinTableComponent', () => {
  let component: CoinTableComponent;
  let fixture: ComponentFixture<CoinTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinTableComponent ],
      imports,
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
