import {ActionType} from '../action-types';
import {Action} from '../actions/index';

type globalState = {
  allCryptos: object[];
  searchResult: object[];
  userCryptos: object[];
};

const initialState: globalState = {
  allCryptos: [],
  searchResult: [],
  userCryptos: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL:
      return {
        ...state,
        allCryptos: action.payload,
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

    case ActionType.SAVE_CRYPTO:
      const newCrypto = state.allCryptos.filter((crypto: any) =>
        crypto.id.includes(action.payload)
      );
      const newUserCryptos = state.userCryptos;
      newUserCryptos.push(newCrypto)
      console.log(newUserCryptos);
      
      return {
        ...state,
        userCryptos: newUserCryptos,
      };

    default:
      return state;
  }
};

export default reducer;
