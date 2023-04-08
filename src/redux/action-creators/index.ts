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

export const searchCryptos = (payload: string) => {
  return {type: ActionType.SEARCH_CRYPTO, payload: payload};
};

export const saveCrypto = (payload: string) => {
  return {type: ActionType.SAVE_CRYPTO, payload: payload};
};

export const deleteCrypto = (payload: string) => {
  return {type: ActionType.DELETE_CRYPTO, payload: payload};
};
