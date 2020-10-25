export interface CoinData {
  cap24hrChange: number;
  long: string;
  mktcap: number;
  perc: number;
  price: number;
  shapeshift: boolean;
  short: string;
  supply: number;
  usdVolume: number;
  volume: number;
  vwapData: number;
  vwapDataBTC: number;
}

export interface CoinsState {
  data: Array<CoinData>;
  lastUpdate?: Date;
  counter?: number;
  isLoading?: boolean;
  error?: string;
}

export const initialState: CoinsState = {
  data: [],
};
