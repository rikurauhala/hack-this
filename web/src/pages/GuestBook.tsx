import { useEffect, useState } from 'react';
import Button from '../components/common/Button';
import Paragraph from '../components/common/Paragraph';
import Subtitle from '../components/common/Subtitle';
import Title from '../components/common/Title';
import { getAllMessages, sendMessage } from '../services/messages';
import { colorButtonFocus, colorText } from '../theme';
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

  const styleForm = `
    bg-gray-800
    mt-4
    mx-auto
    p-4
    rounded-lg
    shadow-md
  `;

  const styleYourMessage = `
    ${colorText}
    block
    font-semibold
    pb-2
  `;

  const styleInput = `
    ${colorButtonFocus}
    ${colorText}
    bg-slate-700
    border
    border-slate-700
    focus:outline-none
    focus:ring-1
    mt-1
    p-2
    rounded-md
    w-full
  `;

  return (
    <div className={styleContainer}>
      <Title text="Guest book" />
      <Paragraph text="Leave a message for other users to see." />
      <form className={styleForm} onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        void handleSubmit(event);
      }}>
        <div className="mb-4">
          <label className={styleYourMessage}>Your Message:</label>
          <textarea
            className={styleInput}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            value={message}
          />
        </div>
        <Button text="Send" />
      </form>
      <div className="mt-8">
        <Subtitle text="Messages" />
        {!messages ? (
          <div className="text-white">No message yet</div>
        ) : (
          <ul>
            {messages.map((message) => (
              <li className="mb-2 text-white" key={message.id}>
                [{message.created_at}] <strong className="text-blue-600">{message.username}</strong>: {message.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GuestBook;
