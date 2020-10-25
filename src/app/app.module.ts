import { BrowserModule }           from '@angular/platform-browser';
import { CommonModule }            from '@angular/common';
import { MatTableModule }          from '@angular/material';
import { NgModule }                from '@angular/core';
import { StoreModule }             from '@ngrx/store';
import { EffectsModule }           from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule }     from '@ngrx/store-devtools';
import { HttpClientModule }        from '@angular/common/http';
import { NgxDatatableModule }      from '@swimlane/ngx-datatable';

import { AppComponent }       from './app.component';
import { config }             from './app.config';
import { CoreModule }         from './core/core.module';
import { AppRoutingModule }   from './app-routing.module';
import { reducers, effects }  from './state';
import { CoinTableComponent } from './coin-table/coin-table.component';

import { environment } from 'app/../environments/environment';

export const imports = [
  BrowserModule,
  CommonModule,
  EffectsModule.forRoot(effects),
  StoreModule.forRoot(reducers),
  CoreModule,
  MatTableModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,
  NgxDatatableModule,
];

if (!environment.production) {
  imports.push(StoreDevtoolsModule.instrument({
    maxAge: config.storeDevTools.maxAge, //  Retains last x states
  }));
}

@NgModule({
  declarations: [
    AppComponent,
    CoinTableComponent,
  ],
  imports,
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
