import {ActionType} from '../action-types';
import {Action} from '../actions/index';

type globalState = {
  allCryptos: object[];
  searchResult: object[];
};

const initialState: globalState = {
  allCryptos: [],
  searchResult: [],
  // userCryptos: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL:
      return {
        ...state,
        allCryptos: action.payload,
      };

    case ActionType.SEARCH_CRYPTO:
      console.log('Llegamos aca!', action.payload);
      let allCrypts = state.allCryptos;
      let cryptosFiltered = [];
      if (action.payload !== 'allDiets') {
        for (let i = 0; i < allCrypts.length; i++) {
          const crypto = allCrypts[i];
          if (
            allCrypts.filter(((cryptos: any) => cryptos.name === action.payload)).length >
            0
          ) {
            cryptosFiltered.push(crypto);
          }
        }
      }
      console.log(cryptosFiltered);
      
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
