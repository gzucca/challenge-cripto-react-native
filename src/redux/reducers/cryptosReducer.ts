import {CryptoObject, GlobalState} from '../../../types';
import {ActionType} from '../action-types';
import {Action} from '../actions/index';

const initialState: GlobalState = {
  allCryptos: [],
  searchResult: [],
  userCryptos: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL:
      const cryptoArray: CryptoObject[] = [];
      action.payload.forEach(crypto => {
        const newCrypto: CryptoObject = {
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
      const cryptosFiltered = state.allCryptos.filter(
        crypto =>
          (crypto.name === action.payload ||
            crypto.symbol === action.payload) &&
          state.userCryptos.find(userCrypto => userCrypto.id === crypto.id) ===
            undefined,
      );

      return {
        ...state,
        searchResult: cryptosFiltered,
      };

    case ActionType.SAVE_CRYPTO:
      const newCrypto = state.searchResult[0];
      const newUserCryptos = state.userCryptos;
      newUserCryptos.push(newCrypto as CryptoObject);

      return {
        ...state,
        userCryptos: newUserCryptos,
      };

    case ActionType.DELETE_CRYPTO:
      const newUserCryptosWDeleted = state.userCryptos.filter(
        crypto => crypto.id !== action.payload,
      );

      return {
        ...state,
        userCryptos: newUserCryptosWDeleted,
      };

    default:
      return state;
  }
};

export default reducer;
