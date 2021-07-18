import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../actions-type/member.actions-type';
import { Action } from '../actions/member.actions';

// export const addMember = (memberData: object) => {
//   return async (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionType.ADD_MEMBER,
//     });

//     try {
//       const { data } = await axios.post(
//         'http://localhost:5000/members',
//         memberData
//       );

//       dispatch({
//         type: ActionType.ADD_MEMBER_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: ActionType.ADD_MEMBER_ERROR,
//         payload: error.message,
//       });
//     }
//   };
// };

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
      // dispatch error action
    }
  };
};
