import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
import StatusMessage, { Status } from '../components/common/StatusMessage';
import LoginForm from '../components/login/LoginForm';
import { login } from '../services/login';

const Login = (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loginStatus, setLoginStatus] = useState<Status>(null);

  const navigate = useNavigate();

  const clearStatusMessage = () => {
    const TIMEOUT_MS = 5000;
    setTimeout(() => {
      setMessage('');
      setLoginStatus(null);
    }, TIMEOUT_MS);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = await login(username, password);
      window.localStorage.setItem('user', JSON.stringify(user.data));
      setMessage('Login successful');
      setLoginStatus('SUCCESS');
      clearStatusMessage();
      setUsername('');
      setPassword('');
      setTimeout(() => {
        return navigate('/');
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message);
        setLoginStatus('ERROR');
        clearStatusMessage();
        console.error('Error during login:', error.message);
      } else {
        console.error('Error during login:', String(error));
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
    <>
      <PageTitle text="Login" />
      <LoginForm
        handleSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          void handleSubmit(event);
        }}
        password={password}
        setPassword={handlePasswordChange}
        setUsername={handleUsernameChange}
        username={username}
      />
      <StatusMessage
        message={message}
        status={loginStatus}
      />
    </>
  );
};

export default Login;
