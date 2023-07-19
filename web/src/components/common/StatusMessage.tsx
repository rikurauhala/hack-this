export type Status = 'SUCCESS' | 'ERROR' | null;

interface FloatingStatusMessageProps {
  message: string;
  status: Status;
}

const FloatingStatusMessage = ({ message, status }: FloatingStatusMessageProps): JSX.Element => {
  if (!message) return <></>;

  const getColorClass = () => {
    return status === 'SUCCESS' ? 'bg-green-500' : 'bg-red-500';
  };

  return (
    <div className={`fixed bottom-4 right-4 py-2 px-4 text-white rounded-md ${getColorClass()} shadow-md`}>
      {message}
    </div>
  );
};

export default FloatingStatusMessage;
