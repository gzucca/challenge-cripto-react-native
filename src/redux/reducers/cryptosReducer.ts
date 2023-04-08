import {CryptoObject, GlobalState} from '../../../types';
import {ActionType} from '../action-types';
import {Action} from '../actions/index';

const initialState: GlobalState = {
  allCryptos: [],
  searchResult: [],
  userCryptos: [],
  userCryptosIds: [],
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
          action.payload !== '' &&
          crypto.name.includes(action.payload) &&
          state.userCryptosIds.find(cryptoId => cryptoId === crypto.id) ===
            undefined,
      );
      return {
        ...state,
        searchResult: cryptosFiltered,
      };

    case ActionType.SAVE_CRYPTO:
      const newCrypto = state.allCryptos.find(
        crypto => crypto.id === action.payload,
      );
      const newUserCryptos = state.userCryptos;
      newUserCryptos.push(newCrypto as CryptoObject);
      const newUserCryptosIds = state.userCryptosIds;
      newUserCryptosIds.push(newCrypto?.id as string);

      return {
        ...state,
        userCryptos: newUserCryptos,
        userCryptosIds: newUserCryptosIds,
      };

    case ActionType.DELETE_CRYPTO:
      const newUserCryptosWDeleted = state.userCryptos.filter(
        crypto => crypto.id !== action.payload,
      );
      const newUserCryptosIdsWDeleted = state.userCryptosIds.filter(
        cryptoId => cryptoId !== action.payload,
      );

      return {
        ...state,
        userCryptos: newUserCryptosWDeleted,
        userCryptosIds: newUserCryptosIdsWDeleted,
      };

    default:
      return state;
  }
};

export default reducer;
