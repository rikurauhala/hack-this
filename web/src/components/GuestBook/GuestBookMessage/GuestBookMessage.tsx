import { colorText } from '../../../theme';
import { Message } from '../../../types';
import GuestBookMessageContent from './GuestBookMessageContent';
import GuestBookMessageTimestamp from './GuestBookMessageTimestamp';
import GuestBookMessageUsername from './GuestBookMessageUsername';

interface GuestBookMessageProps {
  message: Message;
}

const GuestBookMessage = ({ message }: GuestBookMessageProps): JSX.Element => {
  const styleMessage = `
    ${colorText}
    mb-2
  `;

  return (
    <li className={styleMessage}>
      <GuestBookMessageTimestamp timestamp={message.createdAt} />
      <span> </span>
      <GuestBookMessageUsername userId={parseInt(message.userId)} username={message.username} />
      <span>: </span>
      <GuestBookMessageContent message={message.message} />
    </li>
  );
};

export default GuestBookMessage;
