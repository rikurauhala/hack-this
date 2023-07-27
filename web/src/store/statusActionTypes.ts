import { Status } from '../components/common/StatusMessage';

export const SET_STATUS = 'SET_STATUS';
export const CLEAR_STATUS = 'CLEAR_STATUS';

interface SetStatusAction {
  type: typeof SET_STATUS;
  payload: {
    message: string;
    status: Status;
  };
}

interface ClearStatusAction {
  type: typeof CLEAR_STATUS;
}

export type StatusAction = SetStatusAction | ClearStatusAction;
