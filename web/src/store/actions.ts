import { Status } from '../components/common/StatusMessage';
import { SET_STATUS, CLEAR_STATUS } from './statusActionTypes';

export const setStatus = (message: string, status: Status) => ({
  type: SET_STATUS,
  payload: { message, status },
});

export const clearStatus = () => ({
  type: CLEAR_STATUS,
});
