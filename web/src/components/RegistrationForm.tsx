import { UserPlusIcon } from '@heroicons/react/24/outline';
import { FormEvent } from 'react';
import Form from './common/Form';
import { colorMain } from '../theme';

interface RegistrationFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  password: string;
  setPassword: (newPassword: string) => void;
  setUsername: (newUsername: string) => void;
  username: string;
}

/**
 * Renders a registration form component with input fields for username and password, using the Form component.
 *
 * @param {(event: FormEvent<HTMLFormElement>) => void} props.handleSubmit - A function to handle form submission.
 * @param {string} props.password - The current password input value.
 * @param {(newPassword: string) => void} props.setPassword - A function to update the password input value.
 * @param {(newUsername: string) => void} props.setUsername - A function to update the username input value.
 * @param {string} props.username - The current username input value.
 * @returns {JSX.Element} The rendered RegistrationForm component.
 */
const RegistrationForm = (props: RegistrationFormProps): JSX.Element => {
  const styleIcon = `
    ${colorMain}
    h-20
    w-20
  `;

  return (
    <Form
      buttonText="Register"
      handleSubmit={props.handleSubmit}
      icon={<UserPlusIcon className={styleIcon} />}
      password={props.password}
      setPassword={props.setPassword}
      setUsername={props.setUsername}
      username={props.username}
    />
  );
};

export default RegistrationForm;
