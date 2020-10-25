import {
  NgModule,
} from '@angular/core';
import {
  RouterModule,
  Routes,
  Route,
} from '@angular/router';

import { CoinTableComponent } from './coin-table/coin-table.component';

import { environment } from 'app/../environments/environment';

const appRoutes: Routes = [
  {
    path: '',
    component: CoinTableComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: !environment.production } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
