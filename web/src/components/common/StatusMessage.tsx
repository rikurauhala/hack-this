import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearStatus, setStatus } from '../../store/actions';
import { State } from '../../store';
import { colorFailure, colorSuccess, colorText } from '../../theme';
import './StatusMessage.css';

export type Status = 'SUCCESS' | 'ERROR' | null;

const StatusMessage = (): JSX.Element => {
  const message = useSelector((state: State) => state.message);
  const status = useSelector((state: State) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      dispatch(setStatus(message, status));
      const timer = setTimeout(() => {
        dispatch(clearStatus());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, status, dispatch]);

  const getColorClass = (): string => {
    return status === 'SUCCESS' ? colorSuccess : colorFailure;
  };

  const handleClick = (): void => {
    dispatch(clearStatus());
  };

  if (!message) return <></>;

  const style = `
    ${getColorClass()}
    ${colorText}
    bottom-4
    fade-out
    fixed
    py-2
    px-4 
    right-4
    rounded-md
    shadow-md
  `;

  return (
    <div className={style} onClick={handleClick}>
      {message}
    </div>
  );
};

export default StatusMessage;
