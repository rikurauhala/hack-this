import { FormEvent } from 'react';
import { colorButtonFocus, colorText } from '../../theme';
import Button from '../common/Button';

interface GuestBookFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  message: string;
  setMessage: (newMessage: string) => void;
}

/**
 * Renders a guestbook form component with input for entering a message and buttons to submit and clear the message.
 *
 * @param {(event: FormEvent<HTMLFormElement>) => void} props.handleSubmit - A function to handle form submission.
 * @param {string} props.message - The current message input value.
 * @param {(newMessage: string) => void} props.setMessage - A function to update the message input value.
 * @returns {JSX.Element} The rendered GuestBookForm component.
 */
const GuestBookForm = ({ handleSubmit, message, setMessage }: GuestBookFormProps): JSX.Element => {
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
    <form className={styleForm} onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className={styleYourMessage}>Your Message:</label>
        <textarea
          className={styleInput}
          onChange={(event) => setMessage(event.target.value)}
          rows={4}
          value={message}
        />
      </div>
      <div className="flex gap-3">
        <Button
          onClick={() => setMessage('')}
          text="Clear"
          type="reset"
        />
        <Button text="Send" />
      </div>
    </form>
  );
};

export default GuestBookForm;
