import { ActionType } from '../actions-type/member.actions-type';
import { Action } from '../actions/member.actions';

interface IMemberState {
  loading: boolean;
  error: string | null;
  data: object[];
}

const initialState = {
  loading: false,
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
      };
    case ActionType.ADD_MEMBER:
      return {
        ...state,
        loading: true,
      };

    case ActionType.ADD_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case ActionType.ADD_MEMBER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default memberReducer;
