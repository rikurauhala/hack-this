import { Message } from '../../types';
import Paragraph from '../common/Paragraph';
import Subtitle from '../common/Subtitle';
import GuestBookMessage from './GuestBookMessage';

interface GuestBookMessagesProps {
  messages: Message[];
}

const GuestBookMessages = ({ messages }: GuestBookMessagesProps): JSX.Element => (
  <div className="mt-8">
    <Subtitle text="Messages" />
    <ul>
      {messages.length === 0 ? (
        <Paragraph text="No messages yet!" />
      ) : (
        messages.map((message) => (
          <GuestBookMessage
            key={message.messageId}
            message={message}
          />
        ))
      )}
    </ul>
  </div>
);

export default GuestBookMessages;
