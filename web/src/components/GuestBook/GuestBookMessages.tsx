import { Message } from '../../types';
import Paragraph from '../common/Paragraph';
import Subtitle from '../common/Subtitle';
import GuestBookMessage from './GuestBookMessage';

interface GuestBookMessagesProps {
  messages: Message[];
  removeMessage: (messageId: number) => void;
}

/**
 * Renders a list of guestbook messages.
 *
 * @param {Message[]} props.messages - An array of guestbook messages.
 * @param {(messageId: number) => void} props.removeMessage - A function to remove a guestbook message.
 * @returns {JSX.Element} The rendered GuestBookMessages component.
 */
const GuestBookMessages = ({ messages, removeMessage }: GuestBookMessagesProps): JSX.Element => (
  <div className="mt-8">
    <Subtitle text="Messages" />
    <ul>
      {!messages || messages.length === 0 ? (
        <Paragraph text="No messages yet!" />
      ) : (
        messages.map((message) => (
          <GuestBookMessage
            key={message.messageId}
            message={message}
            removeMessage={removeMessage}
          />
        ))
      )}
    </ul>
  </div>
);

export default GuestBookMessages;
