import { colorText } from '../../../theme';
import { Message } from '../../../types';
import GuestBookMessageContent from './GuestBookMessageContent';
import GuestBookMessageDeleteButton from './GuestBookMessageDeleteButton';
import GuestBookMessageTimestamp from './GuestBookMessageTimestamp';
import GuestBookMessageUsername from './GuestBookMessageUsername';

interface GuestBookMessageProps {
  message: Message;
}

const GuestBookMessage = ({ message }: GuestBookMessageProps): JSX.Element => {
  const styleMessage = `
    ${colorText}
    flex
    items-center
    mb-2
  `;

  return (
    <li className={styleMessage}>
      <GuestBookMessageTimestamp timestamp={message.createdAt} />
      <span className="mr-1"> </span>
      <GuestBookMessageUsername userId={parseInt(message.userId)} username={message.username} />
      <span className="mr-1">: </span>
      <GuestBookMessageContent message={message.message} />
      <span className="mr-1"> </span>
      <GuestBookMessageDeleteButton messageId={message.messageId} onClick={() => console.log('')} />
    </li>
  );
};

export default GuestBookMessage;
