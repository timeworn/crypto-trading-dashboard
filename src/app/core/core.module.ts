import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule }       from '@angular/http';

import { HttpService } from './http/http.service';

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    HttpService,
  ],
  exports: [
  ],
})
export class CoreModule { }
