import { coinsReducer } from './coins/coins.reducer';
import { CoinsState }   from './coins/coins.model';
import { CoinsEffects } from './coins/coins.effects';

export const reducers = {
  coins: coinsReducer,
};

export const effects = [
  CoinsEffects,
];

export interface AppState {
  coins: CoinsState;
}
