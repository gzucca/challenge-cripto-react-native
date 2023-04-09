import { CryptoObject } from "../../../types"
import { ActionType } from "../action-types"

interface GetAllAction {
  type: ActionType.GET_ALL,
  payload: any,
}

interface SearchCrypto {
  type: ActionType.SEARCH_CRYPTO,
  payload: string,
}

interface SaveCrypto {
  type: ActionType.SAVE_CRYPTO,
  payload: string,
}

interface DeleteCrytpo {
  type: ActionType.DELETE_CRYPTO,
  payload: string,
}

interface UpdateUserCrypto {
  type: ActionType.UPDATE_USER_CRYPTO,
  payload: any,
}

interface LoadUserCrypto {
  type: ActionType.LOAD_USER_CRYPTO,
  payload: CryptoObject,
}

export type Action = GetAllAction | SearchCrypto | SaveCrypto | DeleteCrytpo | UpdateUserCrypto | LoadUserCrypto