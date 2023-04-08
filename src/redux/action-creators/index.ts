import {ActionType} from '../action-types';
import {Action} from '../actions/index';
import {Dispatch} from 'redux';
import axios from 'axios';
import json from './../../../apiresponse.json';

export const getAllCryptos = () => {
  return async function (dispatch: Dispatch<Action>) {
  //   try {
  //     const json = await axios.get(
  //       `https://data.messari.io/api/v2/assets?limit=20`,
  //     );
      return dispatch({
        type: ActionType.GET_ALL,
        // payload: json.data.data,
        payload: json.data,
      });
  //   } catch (error) {
  //     console.log(error);
  //   }
  };
};

export const searchCryptos = (cryptoName: string) => {
  return {type: ActionType.SEARCH_CRYPTO, payload: cryptoName};
};

export const saveCrypto = (cryptoId: string) => {
  return {type: ActionType.SAVE_CRYPTO, payload: cryptoId};
};

export const deleteCrypto = (cryptoId: string) => {
  return {type: ActionType.DELETE_CRYPTO, payload: cryptoId};
};


export const loadUserCrypto = (cryptoId: string) => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const json = await axios.get(
        `https://data.messari.io/api/v1/assets/${cryptoId}/metrics`,
      );

      return dispatch({
        type: ActionType.LOAD_USER_CRYPTO,
        payload: json.data.data,
      });
    } catch (error) {
      console.log('Hubo un error al llamar a la API', error);
    }
  };
};