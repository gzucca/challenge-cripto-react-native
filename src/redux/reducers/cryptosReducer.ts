import {ActionType} from '../action-types';
import {Action} from '../actions/index';

type cryptoObject = {
  id: string;
  name: string;
  symbol: string;
  priceUsd: number;
  percentChange24hs: number;
};

type globalState = {
  allCryptos: cryptoObject[];
  searchResult: cryptoObject[];
  userCryptos: cryptoObject[];
  userCryptosIds: string[];
};

const initialState: globalState = {
  allCryptos: [],
  searchResult: [],
  userCryptos: [],
  userCryptosIds: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL:
      const cryptoArray: cryptoObject[] = [];
      action.payload.forEach((crypto) => {
        const newCrypto: cryptoObject = {
          id: crypto.id,
          name: crypto.name,
          symbol: crypto.symbol,
          priceUsd: crypto.metrics.market_data.price_usd,
          percentChange24hs: crypto.metrics.market_data.percent_change_usd_last_24_hours,
        };
        cryptoArray.push(newCrypto);
      });

      return {
        ...state,
        allCryptos: cryptoArray,
      };

    case ActionType.SEARCH_CRYPTO:
      const cryptosFilterd = state.allCryptos.filter(
        (crypto) =>
          action.payload !== '' && crypto.name.includes(action.payload) && ((state.userCryptosIds.find(cryptoId => cryptoId === crypto.id)) === undefined)
      );
      return {
        ...state,
        searchResult: cryptosFilterd,
      };

    case ActionType.SAVE_CRYPTO:
      const newCrypto = state.allCryptos.find(
        (crypto) => crypto.id === action.payload,
      );
      const newUserCryptos = state.userCryptos;
      newUserCryptos.push(newCrypto as cryptoObject);
      const newUserCryptosIds = state.userCryptosIds;
      newUserCryptosIds.push(newCrypto?.id as string);
      console.log(newUserCryptosIds);
        
      return {
        ...state,
        userCryptos: newUserCryptos,
      };

    default:
      return state;
  }
};

export default reducer;
