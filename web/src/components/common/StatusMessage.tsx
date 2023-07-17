export type Status = 'SUCCESS' | 'FAILURE' | null;

interface StatusMessageProps {
  message: string;
  status: Status;
}

const StatusMessage = ({ message, status }: StatusMessageProps): JSX.Element => {
  const color = status === 'SUCCESS' ? '#5FAD56' : '#FF5733';
  return <p style={{ color: color }}>{message}</p>;
};

export default StatusMessage;
