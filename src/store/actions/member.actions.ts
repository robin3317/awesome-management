import { ActionType } from '../actions-type/member.actions-type';
import { IData } from '../reducers/member.reducers';

interface SetCurrentMembersAction {
  type: ActionType.SET_CURRENT_MEMBERS;
  payload: Array<IData>;
}

interface SetAddMemberAction {
  type: ActionType.ADD_MEMBER;
  payload: IData;
}

interface SetDeleteMemberAction {
  type: ActionType.DELETE_MEMBER;
  payload: number | string;
}

interface SetSuccessAction {
  type: ActionType.SUCCESS;
}

interface SetErrorAction {
  type: ActionType.ERROR;
  payload: string;
}

export type Action =
  | SetCurrentMembersAction
  | SetAddMemberAction
  | SetDeleteMemberAction
  | SetSuccessAction
  | SetErrorAction;
