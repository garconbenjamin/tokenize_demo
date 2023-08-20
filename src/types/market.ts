type Symbol = {
  id: number;
  marketId: string;
  marketName: string;
  baseCurrency: string;
  marketCurrency: string;
  marketCurrencyLong: string;
  ceiling: string;
  floor: string;
  baseIncrement: string;
  quoteIncrement: null;
  baseMinSize: null;
  baseMaxSize: null;
  tradingStatus: string;
  listRoles: null;
};
type Market = {
  title: string;
  list: Symbol[];
};

type Price = {
  marketId: number;
  market: string;
  askPrice: number;
  bidPrice: number;
  lastPrice: number;
  openPrice: number;
  prevPrice: number;
  high: number;
  low: number;
  volume: number;
  listRoles: null;
};
export type {Symbol, Market, Price};
