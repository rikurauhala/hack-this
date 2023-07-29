import { FormEvent, ReactNode } from 'react';
import FormButton from './FormButton';
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
      <FormButton text={buttonText} />
    </form>
  );
};

export default Form;
