import { UserPlusIcon } from '@heroicons/react/24/outline';
import { FormEvent } from 'react';
import Form from '../common/Form';

interface RegistrationFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  password: string;
  setPassword: (newPassword: string) => void;
  setUsername: (newUsername: string) => void;
  username: string;
}

const RegistrationForm = (props: RegistrationFormProps): JSX.Element => (
  <Form
    buttonText="Register"
    handleSubmit={props.handleSubmit}
    icon={<UserPlusIcon className="w-20 h-20 text-blue-400" />}
    password={props.password}
    setPassword={props.setPassword}
    setUsername={props.setUsername}
    username={props.username}
  />
);

export default RegistrationForm;
