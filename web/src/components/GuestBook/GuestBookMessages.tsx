import { colorText } from '../../theme';
import { Message } from '../../types';
import Subtitle from '../common/Subtitle';
import GuestBookMessage from './GuestBookMessage';

interface GuestBookMessagesProps {
  messages: Message[];
}

const GuestBookMessages = ({ messages }: GuestBookMessagesProps): JSX.Element => {
  if (!messages) {
    return (
      <div className={`${colorText}`}>
        No message yet
      </div>
    );
  }

  return (
    <div className="mt-8">
      <Subtitle text="Messages" />
      <ul>
        {messages.map((message) => (
          <GuestBookMessage
            key={message.id}
            message={message}
          />
        ))}
      </ul>
    </div>
  );
};

export default GuestBookMessages;
