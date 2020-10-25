import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import * as _              from 'lodash';
import { Injectable }      from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store }           from '@ngrx/store';
import { Observable }      from 'rxjs/Observable';

import * as CoinsActions from './coins.actions';
import { AppState }      from 'app/state';
import { HttpService }   from 'app/core/http/http.service';

const countSeconds = 15;

@Injectable()
export class CoinsEffects {
  authToken: Observable<string>;

  constructor(
    private actions: Actions<CoinsActions.All>,
    private http: HttpService,
    private store: Store<AppState>
  ) {}

  @Effect() getCoinsStats: Observable<any> = this.actions
    .ofType(CoinsActions.GET_COINS_STATS)
    .switchMap(() => this.http.getCoinsStats()
      .map(data => new CoinsActions.GetCoinsStatsSuccess(data))
      .catch(error => Observable.of(new CoinsActions.GetCoinsStatsError(error.message))));

  @Effect() setUpdateTime: Observable<any> = this.actions
    .ofType(CoinsActions.GET_COINS_STATS)
    .map(data => new CoinsActions.SetLastUpdate(new Date()));

  @Effect() resetTimer: Observable<any> = this.actions
    .ofType(CoinsActions.GET_COINS_STATS)
    .switchMap(() => Observable
      .timer(0, 1000)
      .map(i => countSeconds - (i + 1))
      .take(countSeconds))
    .switchMap(i => i > 0 ? [new CoinsActions.SetCounter(i)] : [new CoinsActions.SetCounter(i), new CoinsActions.GetCoinsStats()]);
}
