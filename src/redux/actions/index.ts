import { ActionType } from "../action-types"

interface GetAllAction {
  type: ActionType.GET_ALL,
  payload: Array<any>,
}

interface SearchCrypto {
  type: ActionType.SEARCH_CRYPTO,
  payload: string,
}

interface SaveCrypto {
  type: ActionType.SAVE_CRYPTO,
}

interface DeleteCrytpo {
  type: ActionType.DELETE_CRYPTO,
  payload: string,
}

export type Action = GetAllAction | SearchCrypto | SaveCrypto | DeleteCrytpo