import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ActionType } from '../actions-type/member.actions-type';
import { Action } from '../actions/member.actions';
import { IData } from '../reducers/member.reducers';

export const setCurrentMembers = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get('http://localhost:5000/members');

      dispatch({
        type: ActionType.SET_CURRENT_MEMBERS,
        payload: data,
      });

      // This setTimeout is just for development visualization
      // [TODO]: REMOVE setTimeout before production deployment
      setTimeout(() => {
        dispatch({
          type: ActionType.SUCCESS,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: ActionType.ERROR,
        payload: error.message,
      });
    }
  };
};

export const addMember = (memberData: IData) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      await axios.post('http://localhost:5000/members', memberData);

      dispatch({
        type: ActionType.ADD_MEMBER,
        payload: memberData,
      });

      // This setTimeout is just for development visualization
      // [TODO]: REMOVE setTimeout before production deployment
      setTimeout(() => {
        dispatch({
          type: ActionType.SUCCESS,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: ActionType.ERROR,
        payload: error.message,
      });
    }
  };
};
