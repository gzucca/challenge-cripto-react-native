import {CryptoObject, GlobalState} from '../../../types';
import {ActionType} from '../action-types';
import {Action} from '../actions/index';
import {setUserCrypto} from '../../../asyncStorage';

const initialState: GlobalState = {
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
      setUserCrypto(newUserCryptos);

      return {
        ...state,
        userCryptos: newUserCryptos,
      };

    case ActionType.DELETE_CRYPTO:
      const newUserCryptosWDeleted = state.userCryptos.filter(
        crypto => crypto.id !== action.payload,
      );

      setUserCrypto(newUserCryptosWDeleted);

      return {
        ...state,
        userCryptos: newUserCryptosWDeleted,
      };

    case ActionType.UPDATE_USER_CRYPTO:
      const loadedCryptoArray: CryptoObject[] = state.userCryptos;
      const timeStamp2 = action.payload.status.timestamp;
      const newCrypto2: CryptoObject = {
        timeStamp: timeStamp2,
        id: action.payload.data.id,
        name: action.payload.data.name,
        symbol: action.payload.data.symbol,
        priceUsd: action.payload.data.market_data.price_usd,
        percentChange24hs:
          action.payload.data.market_data.percent_change_usd_last_24_hours,
      };
      loadedCryptoArray.push(newCrypto2);
      setUserCrypto(loadedCryptoArray);
      
      return {
        ...state,
        userCryptos: loadedCryptoArray,
      };

    case ActionType.LOAD_USER_CRYPTO:
      const storeCryptos: CryptoObject[] = state.userCryptos;
      storeCryptos.push(action.payload);

      return {
        ...state,
        userCryptos: storeCryptos,
      };

    default:
      return state;
  }
};

export default reducer;
