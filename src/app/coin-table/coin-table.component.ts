import * as _                from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';
import { MatSort }           from '@angular/material';
import { DataSource }        from '@angular/cdk/collections';
import { Observable }        from 'rxjs/Observable';

import { config }        from 'app/app.config';
import { AppState }      from 'app/state';
import { GetCoinsStats } from 'app/state/coins/coins.actions';
import { CoinData }      from 'app/state/coins/coins.model';

@Component({
  selector   : 'app-coin-table',
  templateUrl: './coin-table.component.html',
  styleUrls  : ['./coin-table.component.scss'],
})
export class CoinTableComponent implements OnInit {
  lastUpdate: Observable<Date>;
  coinsStats: Observable<Array<CoinData>>;
  isLoading: Observable<boolean>;
  counter: Observable<number>;
  error: Observable<string>;
  columns = config.coinTable.columns;
  tableConfig = {
    columns: _.values(this.columns),
    ..._.pick(config.coinTable, ['columnMode', 'rowHeight', 'sortType', 'limit', 'footerHeight', 'headerHeight', 'sorts']),
  };
  colors = config.coinTable.cap24hrChange.colors;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetCoinsStats());
    this.lastUpdate = this.store.select(state => state.coins.lastUpdate);
    this.counter    = this.store.select(state => state.coins.counter);
    this.coinsStats = this.store.select(state => state.coins.data);
    this.isLoading  = this.store.select(state => state.coins.isLoading);
    this.error      = this.store.select(state => state.coins.error);
  }

  getCap24hrChangeColor(value) {
    return (value > 0) ? this.colors.positive : ((value === 0) ? this.colors.neutral : this.colors.negative);
  }
}
