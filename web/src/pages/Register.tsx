import React from 'react';
import { useDispatch } from 'react-redux';
import PageTitle from '../components/common/PageTitle';
import RegistrationForm from '../components/registration/RegistrationForm';
import { registerUser } from '../services/register';
import { setStatus } from '../store/actions';

const Register = (): JSX.Element => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await registerUser(username, password);
      dispatch(setStatus('Registration successful', 'SUCCESS'));
      setUsername('');
      setPassword('');
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setStatus(error.message, 'ERROR'));
        console.error('Error during registration:', error.message);
      } else {
        console.error('Error during registration:', String(error));
      }
    }
  };

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername);
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  };

  return (
    <div className="container py-4">
      <PageTitle text="Register" />
      <RegistrationForm
        handleSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          void handleSubmit(event);
        }}
        password={password}
        setPassword={handlePasswordChange}
        setUsername={handleUsernameChange}
        username={username}
      />
    </div>
  );
};

export default Register;
