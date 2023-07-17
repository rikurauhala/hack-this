import { FormEvent } from 'react';
import Form from '../common/Form';

interface LoginFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  password: string;
  setPassword: (newPassword: string) => void;
  setUsername: (newUsername: string) => void;
  username: string;
}

const LoginForm = (props: LoginFormProps): JSX.Element => (
  <Form
    buttonText="Login"
    handleSubmit={props.handleSubmit}
    password={props.password}
    setPassword={props.setPassword}
    setUsername={props.setUsername}
    username={props.username}
  />
);

export default LoginForm;
