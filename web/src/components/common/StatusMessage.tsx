import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearStatus, setStatus } from '../../store/actions';
import { State } from '../../store';
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

  const getColorClass = () => {
    return status === 'SUCCESS' ? 'bg-green-500' : 'bg-red-500';
  };

  const handleClick = () => {
    dispatch(clearStatus());
  };

  if (!message) return <></>;

  return (
    <div
      className={`fixed bottom-4 right-4 py-2 px-4 text-white rounded-md ${getColorClass()} shadow-md fade-out`}
      onClick={handleClick}
    >
      {message}
    </div>
  );
};

export default StatusMessage;
