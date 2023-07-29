import { KeyIcon } from '@heroicons/react/24/outline';
import { FormEvent } from 'react';
import Form from '../common/Form';

interface LoginFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  password: string;
  setPassword: (newPassword: string) => void;
  setUsername: (newUsername: string) => void;
  username: string;
}

const LoginForm = (props: LoginFormProps): JSX.Element => {
  const styleIcon = `
    h-20
    text-blue-400
    w-20
  `;

  return (
    <Form
      buttonText="Login"
      handleSubmit={props.handleSubmit}
      icon={<KeyIcon className={styleIcon} />}
      password={props.password}
      setPassword={props.setPassword}
      setUsername={props.setUsername}
      username={props.username}
    />
  );
};

export default LoginForm;
