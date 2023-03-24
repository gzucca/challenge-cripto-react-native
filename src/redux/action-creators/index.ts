import { ActionType } from "../action-types";
import { Action} from "../actions/index";
import { Dispatch } from "redux";
import axios from "axios";

export const getAllCryptos = () => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const json = await axios.get(
        `https://data.messari.io/api/v2/assets?limit=2`,
      );
      return dispatch({
        type: ActionType.GET_ALL,
        payload: json.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const getAllCryptos = () => {
// require("got")
//   .get("https://data.messari.io/api/v2/assets")
//   .json()
//   .then((response: JSON) => {
//     console.log(response);
//   })
//   .catch((err:string) => {console.log("Could not get cryptos from API:", err)});

