export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

export type CryptoObject = {
  timeStamp: string;
  id: string;
  name: string;
  symbol: string;
  priceUsd: number;
  percentChange24hs: number;
};

export type GlobalState = {
  allCryptos: CryptoObject[];
  searchResult: CryptoObject[];
  userCryptos: CryptoObject[];
};

export type CryptCardProps = {
  image: string;
  name: string;
  priceUsd: number;
  percentChange24hs: number;
  id: string;
  symbol: string;
  onSelect: boolean;
};

export type CryptCardsProps = {
  cryptosPassed: CryptoObject[];
  setSelected: Function;
  selected: string;
}
