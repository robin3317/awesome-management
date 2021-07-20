import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
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
      // setTimeout(() => {
      dispatch({
        type: ActionType.SUCCESS,
      });
      // }, 1000);
    } catch (error) {
      dispatch({
        type: ActionType.ERROR,
        payload: error.message,
      });
      toast(error.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
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
        toast('Successfully added member', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: ActionType.ERROR,
        payload: `${error.message}, Please refresh the page and try again!`,
      });
    }
  };
};

export const deleteMember = (memberId: number | string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      await axios.delete(`http://localhost:5000/members/${memberId}`);

      dispatch({
        type: ActionType.DELETE_MEMBER,
        payload: memberId,
      });

      // This setTimeout is just for development visualization
      // [TODO]: REMOVE setTimeout before production deployment
      setTimeout(() => {
        dispatch({
          type: ActionType.SUCCESS,
        });
        toast('Successfully delete member', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: ActionType.ERROR,
        payload: `${error.message}, Please refresh the page and try again!`,
      });
      toast(error.message, {
        type: 'error',
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    }
  };
};

export const editMember = (memberData: IData) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      await axios.patch(`http://localhost:5000/${memberData.id}`, memberData);

      dispatch({
        type: ActionType.EDIT_MEMBER,
        payload: memberData,
      });

      // This setTimeout is just for development visualization
      // [TODO]: REMOVE setTimeout before production deployment
      setTimeout(() => {
        dispatch({
          type: ActionType.SUCCESS,
        });
        toast('Successfully edit member', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: ActionType.ERROR,
        payload: `${error.message}, Please refresh the page and try again!`,
      });
    }
  };
};
