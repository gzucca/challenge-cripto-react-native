import { ActionType } from "../action-types"

interface GetAllAction {
  type: ActionType.GET_ALL,
  payload: Array<any>,
}

export type Action = GetAllAction