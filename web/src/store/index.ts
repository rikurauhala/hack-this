import { configureStore } from '@reduxjs/toolkit';
import { Status } from '../components/common/StatusMessage';
import { StatusAction } from './statusActionTypes';

export interface State {
  message: string;
  status: Status;
}

const initialState: State = {
  message: '',
  status: null,
};

/**
 * The reducer function for handling status-related actions.
 *
 * @param {State} state - The current state.
 * @param {StatusAction} action - The action being dispatched.
 * @returns {State} The new state after applying the action.
 */
const statusReducer = (state: State = initialState, action: StatusAction): State => {
  switch (action.type) {
    case 'SET_STATUS':
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
      };
    case 'CLEAR_STATUS':
      return {
        ...state,
        message: '',
        status: null,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: statusReducer,
});

export default store;
