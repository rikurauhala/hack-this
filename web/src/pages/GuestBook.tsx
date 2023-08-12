import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Paragraph from '../components/common/Paragraph';
import Title from '../components/common/Title';
import GuestBookForm from '../components/GuestBook/GuestBookForm';
import GuestBookMessages from '../components/GuestBook/GuestBookMessages';
import { getAllMessages, sendMessage } from '../services/messages';
import { setStatus } from '../store/actions';
import { Message, User } from '../types';

const GuestBook = (): JSX.Element => {
  const [userId, setUserId] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Guest book | Hack This';
    const userJSON = window.localStorage.getItem('user');
    if (userJSON) {
      const userJson = JSON.parse(userJSON) as User;
      setUserId(userJson.id as unknown as number);
    } else {
      setUserId(null);
    }

    void fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const fetchedMessages = await getAllMessages();
      setMessages(fetchedMessages as Message[]);
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setStatus(error.message, 'ERROR'));
        console.error('Error fetching messages:', error);
      } else {
        console.error('Error fetching message:', String(error));
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await sendMessage(userId, message);
      setMessage('');
      void fetchMessages();
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setStatus(error.message, 'ERROR'));
        console.error('Error sending message:', error);
      } else {
        console.error('Error sending message:', String(error));
      }
    }
  };

  const styleContainer = `
    container
    max-w-screen-md
    mx-auto
    py-4
  `;

  return (
    <div className={styleContainer}>
      <Title text="Guest book" />
      {userId !== null ? (
        <>
          <Paragraph text="Leave a message for other users to see." />
          <GuestBookForm
            handleSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              void handleSubmit(event);
            }}
            message={message}
            setMessage={setMessage}
          />
        </>
      ) : (
        <Paragraph text="Log in to send a message." />
      )}
      <GuestBookMessages messages={messages} />
    </div>
  );
};

export default GuestBook;
