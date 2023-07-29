import { UserPlusIcon } from '@heroicons/react/24/outline';
import { FormEvent } from 'react';
import Form from '../common/Form';
import { colorMain } from '../../theme';

interface RegistrationFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  password: string;
  setPassword: (newPassword: string) => void;
  setUsername: (newUsername: string) => void;
  username: string;
}

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
