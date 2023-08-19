import { Status } from '../components/common/StatusMessage';
import { SET_STATUS, CLEAR_STATUS } from './statusActionTypes';

/**
 * Action creator to set the status message in the Redux store.
 *
 * @param {string} message - The status message to be set.
 * @param {Status} status - The status type (SUCCESS, ERROR, or null) of the status message.
 * @returns {object} An action object with type SET_STATUS and payload containing the message and status.
 */
export const setStatus = (message: string, status: Status) => ({
  type: SET_STATUS,
  payload: { message, status },
});

/**
 * Action creator to clear the status message in the Redux store.
 *
 * @returns {object} An action object with type CLEAR_STATUS.
 */
export const clearStatus = () => ({
  type: CLEAR_STATUS,
});
