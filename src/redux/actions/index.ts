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
}

export type Action = GetAllAction | SearchCrypto | SaveCrypto