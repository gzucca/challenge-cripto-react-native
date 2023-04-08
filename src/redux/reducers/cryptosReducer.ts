import {CryptoObject, GlobalState} from '../../../types';
import {ActionType} from '../action-types';
import {Action} from '../actions/index';
import { setUserCrypto} from '../../../asyncStorage';

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
      setUserCrypto(newUserCryptosIds);

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

      setUserCrypto(newUserCryptosIdsWDeleted);

      return {
        ...state,
        userCryptos: newUserCryptosWDeleted,
        userCryptosIds: newUserCryptosIdsWDeleted,
      };

    case ActionType.LOAD_USER_CRYPTO:

      const loadedCryptoArray: CryptoObject[] = state.userCryptos;
      const loadedCryptoArrayIds: string[] = state.userCryptosIds

        const loadedCrypto: CryptoObject = {
        id: action.payload.id,
        name: action.payload.name,
        symbol: action.payload.symbol,
        priceUsd: action.payload.market_data.price_usd,
        percentChange24hs:
          action.payload.market_data.percent_change_usd_last_24_hours,
      };
      loadedCryptoArray.push(loadedCrypto)
      loadedCryptoArrayIds.push(loadedCrypto.id)
    

      return {
        ...state,
        userCryptos: loadedCryptoArray,
        userCryptosIds: loadedCryptoArrayIds,
      };

    default:
      return state;
  }
};

export default reducer;
