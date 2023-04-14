import {ActionType} from '../action-types';
import {Action} from '../actions/index';
import {Dispatch} from 'redux';
import axios from 'axios';
import { CryptoObject } from '../../../types';

export const getAllCryptos = () => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const json = await axios.get(
        `https://data.messari.io/api/v2/assets?limit=20`,
      );
      return dispatch({
        type: ActionType.GET_ALL,
        payload: json.data,
      });
    } catch (e) {
      throw e;
    }
  };
};

export const searchCryptos = (cryptoName: string) => {
  return {type: ActionType.SEARCH_CRYPTO, payload: cryptoName};
};

export const saveCrypto = () => {
  return {type: ActionType.SAVE_CRYPTO};
};

export const deleteCrypto = (cryptoId: string) => {
  return {type: ActionType.DELETE_CRYPTO, payload: cryptoId};
};


export const updateUserCrypto = (cryptoId: string) => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const json = await axios.get(
        `https://data.messari.io/api/v1/assets/${cryptoId}/metrics`,
      );

      return dispatch({
        type: ActionType.UPDATE_USER_CRYPTO,
        payload: json.data,
      });
    } catch (e) {
      throw e;
    }
  };
};

export const loadUserCrypto = (crypto: CryptoObject) => {
  return {type: ActionType.LOAD_USER_CRYPTO, payload: crypto};
};