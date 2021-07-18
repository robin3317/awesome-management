import { ActionType } from '../actions-type/member.actions-type';
import { IData } from '../reducers/member.reducers';

interface SetCurrentMembersAction {
  type: ActionType.SET_CURRENT_MEMBERS;
  payload: Array<IData>;
}

interface SetSuccessAction {
  type: ActionType.SUCCESS;
}

export type Action = SetCurrentMembersAction | SetSuccessAction;
