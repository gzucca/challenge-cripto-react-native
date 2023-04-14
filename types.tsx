export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

export type CryptoObject = {
  id: string;
  name: string;
  symbol: string;
  priceUsd: number;
  percentChange24hs: number;
  timeStamp: string;
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
};

export type CryptCardsProps = {
  cryptosPassed: CryptoObject[];
}
