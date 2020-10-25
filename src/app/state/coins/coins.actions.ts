import { Action } from '@ngrx/store';
import { CoinData } from './coins.model';

export const GET_COINS_STATS         = 'GET_COINS_STATS';
export const GET_COINS_STATS_ERROR   = 'GET_COINS_STATS_ERROR';
export const GET_COINS_STATS_SUCCESS = 'GET_COINS_STATS_SUCCESS';
export const SET_LAST_UPDATE         = 'SET_LAST_UPDATE';
export const SET_COUNTER             = 'SET_COUNTER';

export class GetCoinsStats implements Action {
  readonly type = GET_COINS_STATS;

  constructor(public payload?: any) {}
}

export class GetCoinsStatsError implements Action {
  readonly type = GET_COINS_STATS_ERROR;

  constructor(public payload?: any) {}
}

export class GetCoinsStatsSuccess implements Action {
  readonly type = GET_COINS_STATS_SUCCESS;

  constructor(public payload: Array<CoinData>) {}
}

export class SetLastUpdate implements Action {
  readonly type = SET_LAST_UPDATE;

  constructor(public payload: Date) {}
}

export class SetCounter implements Action {
  readonly type = SET_COUNTER;

  constructor(public payload: number) {}
}

export type All
  = SetLastUpdate
  | GetCoinsStatsError
  | GetCoinsStatsSuccess
  | SetCounter
  | GetCoinsStats;
