import { ActionType } from '../actions-type/member.actions-type';
import { Action } from '../actions/member.actions';

export interface IData {
  id?: number;
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

    case ActionType.ADD_MEMBER:
      return {
        data: [...state.data, action.payload],
        loading: true,
        error: null,
      };

    case ActionType.EDIT_MEMBER:
      return {
        data: [
          ...state.data.filter((member) => member.id !== action.payload.id),
          action.payload,
        ],
        loading: true,
        error: null,
      };

    case ActionType.DELETE_MEMBER:
      return {
        ...state,
        data: state.data.filter((data) => data.id !== action.payload),
      };

    case ActionType.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case ActionType.ERROR:
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
