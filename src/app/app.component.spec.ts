import { TestBed, async }     from '@angular/core/testing';
import { APP_BASE_HREF }      from '@angular/common';
import { AppComponent }       from './app.component';
import { imports }            from './app.module';
import { CoinTableComponent } from './coin-table/coin-table.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CoinTableComponent,
      ],
      imports,
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  }));
  it('should render router outlet', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet').textContent).toBeDefined();
  }));
});
