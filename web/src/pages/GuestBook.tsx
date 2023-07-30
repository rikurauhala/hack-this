import { useEffect, useState } from 'react';
import Paragraph from '../components/common/Paragraph';
import Title from '../components/common/Title';
import GuestBookForm from '../components/GuestBook/GuestBookForm';
import GuestBookMessages from '../components/GuestBook/GuestBookMessages';
import { getAllMessages, sendMessage } from '../services/messages';
import { Message, User } from '../types';

const GuestBook = (): JSX.Element => {
  const [userId, setUserId] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
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
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await sendMessage(userId, message);
      setMessage('');
      void fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
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
      <Paragraph text="Leave a message for other users to see." />
      <GuestBookForm
        handleSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          void handleSubmit(event);
        }}
        message={message}
        setMessage={setMessage}
      />
      <GuestBookMessages messages={messages} />
    </div>
  );
};

export default GuestBook;
