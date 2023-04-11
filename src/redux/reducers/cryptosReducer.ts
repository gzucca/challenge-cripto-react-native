import {ActionType} from '../action-types';
import {Action} from '../actions/index';

type CryptoObject = {
  timeStamp: string;
  id: string;
  name: string;
  symbol: string;
  priceUsd: number;
  percentChange24hs: number;
};

type globalState = {
  allCryptos: CryptoObject[];
  searchResult: CryptoObject[];
  userCryptos: CryptoObject[];
};

const initialState: globalState = {
  allCryptos: [],
  searchResult: [],
  userCryptos: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL:
      const cryptoArray: CryptoObject[] = [];
      const timeStamp = action.payload.status.timestamp;
      action.payload.data.forEach((crypto: any) => {
        const newCrypto: CryptoObject = {
          timeStamp: timeStamp,
          id: crypto.id,
          name: crypto.name,
          symbol: crypto.symbol,
          priceUsd: crypto.metrics.market_data.price_usd,
          percentChange24hs:
            crypto.metrics.market_data.percent_change_usd_last_24_hours,
        };
        cryptoArray.push(newCrypto);
      });

      return {
        ...state,
        allCryptos: cryptoArray,
      };


    case ActionType.SEARCH_CRYPTO:
      const cryptosFilterd = state.allCryptos.filter(
        (crypto: any) =>
          action.payload !== '' && crypto.name.includes(action.payload),
      );
      return {
        ...state,
        searchResult: cryptosFilterd,
      };



    default:
      return state;
  }
};

export default reducer;
