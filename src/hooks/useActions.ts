import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActionCreators from '../store/action-creators/member.action-creators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(memberActionCreators, dispatch);
};
