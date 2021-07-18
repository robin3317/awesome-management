import { ActionType } from '../actions-type/member.actions-type';
import { Action } from '../actions/member.actions';

export interface IData {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  description?: string;
  address: string;
}

interface IMemberState {
  loading: boolean;
  error: string | null;
  data: Array<IData>;
}

const initialState = {
  loading: true,
  error: null,
  data: [],
};

const memberReducer = (
  state: IMemberState = initialState,
  action: Action
): IMemberState => {
  switch (action.type) {
    case ActionType.SET_CURRENT_MEMBERS:
      return {
        ...state,
        data: action.payload,
        loading: true,
      };

    case ActionType.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default memberReducer;
