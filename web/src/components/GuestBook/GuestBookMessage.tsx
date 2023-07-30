import { colorMain, colorText } from '../../theme';
import { Message } from '../../types';

interface GuestBookMessageProps {
  message: Message;
}

const Timestamp = ({ timestamp }: { timestamp: string }): JSX.Element => {
  const formattedTimestamp = new Date(timestamp).toISOString().slice(0, 10);
  return <span className="text-gray-400">[{formattedTimestamp}]</span>;
};

const Username = ({ username }: { username: string }): JSX.Element => (
  <strong className={`${colorMain}`}>{username}</strong>
);

const MessageContent = ({ message }: { message: string }): JSX.Element => (
  <span>{message}</span>
);

const GuestBookMessage = ({ message }: GuestBookMessageProps): JSX.Element => {
  const styleMessage = `
    ${colorText}
    mb-2
  `;

  return (
    <li className={styleMessage}>
      <Timestamp timestamp={message.created_at} />
      <span> </span>
      <Username username={message.username} />
      <span>: </span>
      <MessageContent message={message.message} />
    </li>
  );
};

export default GuestBookMessage;
