import {ActionType} from '../action-types';
import {Action} from '../actions/index';

type globalState = {
  allCryptos: object[];
};

const initialState: globalState = {
  allCryptos: [],
  // allCryptosWithImg: [],
  // userCryptos: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL:
      return {
        ...state,
        allCryptos: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
