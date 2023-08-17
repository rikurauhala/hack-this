import { FormEvent, ReactNode } from 'react';
import Button from '../Button';
import FormInput from './FormInput';
import FormIcon from './FormIcon';

interface FormProps {
  buttonText: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  icon: ReactNode;
  password: string;
  setPassword: (newPassword: string) => void;
  setUsername: (newUsername: string) => void;
  username: string;
}

/**
 * A reusable form component with input fields for username and password, and a submit button.
 *
 * @param {string} props.buttonText - The text to display on the submit button.
 * @param {Function} props.handleSubmit - The function to be called on form submission.
 * @param {ReactNode} props.icon - The icon to display alongside the form.
 * @param {string} props.password - The current password input value.
 * @param {Function} props.setPassword - A function to update the password input value.
 * @param {Function} props.setUsername - A function to update the username input value.
 * @param {string} props.username - The current username input value.
 * @returns {JSX.Element} The rendered Form component.
 */
const Form = (props: FormProps): JSX.Element => {
  const { buttonText, handleSubmit, icon, password, setPassword, setUsername, username } = props;

  const styleForm = `
    bg-gray-800
    mt-8
    mx-auto
    p-4
    rounded-lg
    shadow-md
    sm:w-96
    w-full
  `;

  return (
    <form className={styleForm} onSubmit={(event) => handleSubmit(event)}>
      <FormIcon icon={icon} />
      <FormInput
        id="username"
        labelText="Username"
        onChange={setUsername}
        type="text"
        value={username}
      />
      <FormInput
        id="password"
        labelText="Password"
        onChange={setPassword}
        type="password"
        value={password}
      />
      <Button text={buttonText} />
    </form>
  );
};

export default Form;
