import * as _ from 'lodash';

import * as CoinsActions from './coins.actions';
import { initialState }  from './coins.model';

export type Action = CoinsActions.All;

const reducerMap = {
  [CoinsActions.SET_LAST_UPDATE]: (state, payload) =>
    ({ ...state, lastUpdate: payload }),
  [CoinsActions.GET_COINS_STATS_SUCCESS]: (state, payload) =>
    ({ ...state, data: payload, isLoading: false, error: null }),
  [CoinsActions.SET_COUNTER]: (state, payload) =>
    ({ ...state, counter: payload }),
  [CoinsActions.GET_COINS_STATS]: (state, payload) =>
    ({ ...state, isLoading: true }),
  [CoinsActions.GET_COINS_STATS_ERROR]: (state, payload) =>
    ({ ...state, error: payload }),
};

export function coinsReducer(state = initialState, action: Action) {
  return _.isFunction(reducerMap[action.type])
    ? reducerMap[action.type](state, action.payload)
    : state;
}
