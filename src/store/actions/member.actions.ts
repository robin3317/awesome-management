import { ActionType } from '../actions-type/member.actions-type';

interface SetCurrentMembersAction {
  type: ActionType.SET_CURRENT_MEMBERS;
}

interface AddMemberAction {
  type: ActionType.ADD_MEMBER;
}

interface AddMemberSuccessAction {
  type: ActionType.ADD_MEMBER_SUCCESS;
  payload: {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: string;
    description?: string;
  }[];
}

interface AddMemberErrorAction {
  type: ActionType.ADD_MEMBER_ERROR;
  payload: string;
}

interface DeleteMemberAction {
  type: ActionType.DELETE_MEMBER;
  payload: number;
}

interface DeleteMemberSuccessAction {
  type: ActionType.DELETE_MEMBER_SUCCESS;
}

interface DeleteMemberErrorAction {
  type: ActionType.DELETE_MEMBER_ERROR;
  payload: string;
}

export type Action =
  | SetCurrentMembersAction
  | AddMemberAction
  | AddMemberSuccessAction
  | AddMemberErrorAction
  | DeleteMemberAction
  | DeleteMemberSuccessAction
  | DeleteMemberErrorAction;
